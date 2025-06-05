import { Container, Text } from "./styles";

import { Header } from "@components/Header";
import { DietPercentage } from "@components/DietPercentage";
import { Button } from "@components/Button";

import { SectionList } from "react-native";
import { RoutineItem } from "@components/RoutineItem";
import { useCallback, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";

type Meal = {
  hour: string;
  name: string;
  type: "PRIMARY" | "SECONDARY";
  description: string;
};

type SectionDataMeal = {
  title: string;
  data: Meal[];
};

export function Home() {
  const [dietList, setDietList] = useState<[]>([]);

  const navigation = useNavigation();

  const { FONT_FAMILY, FONT_SIZE } = useTheme();

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleMealDetails() {
    navigation.navigate("MealDetails", {
      type: "PRIMARY",
      name: "Exemplo de Refeição",
      description: "Descrição da refeição",
      date: "01/01/2023",
      hour: "12:00",
    });
  }

  const renderItem = ({
    item,
    section,
  }: {
    item: Meal;
    section: SectionDataMeal;
  }) => (
    <RoutineItem
      hour={item.hour}
      title={item.name}
      type={item.type}
      onPress={() => {
        navigation.navigate("MealDetails", {
          type: item.type,
          name: item.name,
          description: item.description,
          date: section.title,
          hour: item.hour,
        });
      }}
    />
  );

  function handleDietStatistics() {
    navigation.navigate("DietStatistics");
  }

  async function fetchDietList() {
    try {
      const response = await mealsGetAll();

      const data = (response ?? []).map((item) =>
        typeof item === "string" ? JSON.parse(item) : item
      );

      // Função para converter dd/mm/yyyy → yyyy-mm-dd
      const parseDateToISO = (dateBR: string) => {
        const [dd, mm, yyyy] = dateBR.split("/");
        return `${yyyy}-${mm}-${dd}`;
      };

      // Agrupando por data
      const grouped = data.reduce((acc, item) => {
        const date = item.date;
        const existingGroup = acc.find(
          (group: SectionDataMeal) => group.title === date
        );

        if (existingGroup) {
          existingGroup.data.push({
            hour: item.hour,
            name: item.name,
            type: item.isOnDiet ? "PRIMARY" : "SECONDARY",
            description: item.description,
          });
        } else {
          acc.push({
            title: date,
            data: [
              {
                hour: item.hour,
                name: item.name,
                type: item.isOnDiet ? "PRIMARY" : "SECONDARY",
                description: item.description,
              },
            ],
          });
        }

        return acc;
      }, []);

      // Ordenando os grupos por data (mais recente para o mais antigo)
      const mealsGroupedAndSorted = grouped
        .map((group: SectionDataMeal) => ({
          ...group,
          // Ordenando os itens de cada seção por hora (crescente)
          data: group.data.sort((a, b) => a.hour.localeCompare(b.hour)),
        }))
        .sort((a: SectionDataMeal, b: SectionDataMeal) => {
          return (
            new Date(parseDateToISO(b.title)).getTime() -
            new Date(parseDateToISO(a.title)).getTime()
          );
        });

      setDietList(mealsGroupedAndSorted);
    } catch (error) {}
  }

  useFocusEffect(
    useCallback(() => {
      fetchDietList();
    }, [])
  );

  return (
    <Container>
      <Header />
      <DietPercentage percentage={80} onPress={handleDietStatistics} />
      <Text>Refeições</Text>
      <Button
        title={"Nova refeição"}
        onPress={handleNewMeal}
        style={{ marginBottom: 8 }}
      />
      <SectionList
        sections={dietList}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{ fontFamily: FONT_FAMILY.BOLD, fontSize: FONT_SIZE.XL }}
          >
            {title}
          </Text>
        )}
        ListEmptyComponent={() => <ListEmpty />}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: dietList.length === 0 ? "center" : "flex-start",
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

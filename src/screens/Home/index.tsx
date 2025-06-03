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

type SectionDataMeal = {
  title: string;
  data: Array<{
    hour: string;
    name: string;
    type: "PRIMARY" | "SECONDARY";
  }>;
};

export function Home() {
  const [dietList, setDietList] = useState<SectionDataMeal[]>([]);

  const navigation = useNavigation();

  const { FONT_FAMILY, FONT_SIZE } = useTheme();

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleDietStatistics() {
    navigation.navigate("DietStatistics");
  }

  function handleRemoveMeal() {}

  async function fetchDietList() {
    try {
      const response = await mealsGetAll();

      const data = (response ?? []).map((item) =>
        typeof item === "string" ? JSON.parse(item) : item
      );

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
          });
        } else {
          acc.push({
            title: date,
            data: [
              {
                hour: item.hour,
                name: item.name,
                type: item.isOnDiet ? "PRIMARY" : "SECONDARY",
              },
            ],
          });
        }

        return acc;
      }, []);

      // Ordenando os grupos por data (mais recente para o mais antigo)
      const groupedAndSorted = grouped
        .map((group: SectionDataMeal) => ({
          ...group,
          // Ordenando os itens de cada seção por hora (crescente)
          data: group.data.sort((a, b) => a.hour.localeCompare(b.hour)),
        }))
        .sort((a: SectionDataMeal, b: SectionDataMeal) => {
          return new Date(b.title).getTime() - new Date(a.title).getTime();
        });

      setDietList(groupedAndSorted);
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
      <DietPercentage percentage={"80"} onPress={handleDietStatistics} />
      <Text>Refeições</Text>
      <Button
        title={"Nova refeição"}
        onPress={handleNewMeal}
        style={{ marginBottom: 8 }}
      />
      <SectionList
        sections={dietList}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <RoutineItem hour={item.hour} title={item.name} type={item.type} />
        )}
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

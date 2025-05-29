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
import { NewMealProps } from "@screens/NewMeal";

// const DATA = [
//   {
//     title: "01.01.2023",
//     data: [
//       {
//         hour: "08:00",
//         title: "Café da manhã",
//         type: "PRIMARY",
//       },
//       {
//         hour: "10:00",
//         title: "Lanche da manhã",
//         type: "SECONDARY",
//       },
//       {
//         hour: "12:00",
//         title: "Almoço",
//         type: "PRIMARY",
//       },
//       {
//         hour: "15:00",
//         title: "Lanche da tarde",
//         type: "SECONDARY",
//       },
//       {
//         hour: "18:00",
//         title: "Jantar",
//         type: "PRIMARY",
//       },
//     ],
//   },
//   {
//     title: "02.01.2023",
//     data: [
//       {
//         hour: "08:00",
//         title: "Café da manhã",
//         type: "PRIMARY",
//       },
//       {
//         hour: "10:00",
//         title: "Lanche da manhã",
//         type: "SECONDARY",
//       },
//       {
//         hour: "12:00",
//         title: "Almoço",
//         type: "PRIMARY",
//       },
//       {
//         hour: "15:00",
//         title: "Lanche da tarde",
//         type: "SECONDARY",
//       },
//       {
//         hour: "18:00",
//         title: "Jantar",
//         type: "PRIMARY",
//       },
//     ],
//   },
// ];

type RoutineItemProps = {
  hour: string;
  title: string;
  type: "PRIMARY" | "SECONDARY";
};

export function Home() {
  const [dietList, setDietList] = useState<
    { title: string; data: RoutineItemProps[] }[]
  >([]);

  const navigation = useNavigation();

  const { FONT_FAMILY, FONT_SIZE } = useTheme();

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleDietStatistics() {
    navigation.navigate("DietStatistics");
  }

  async function fetchDietList() {
    try {
      const data = await mealsGetAll();
      // const formattedData = formatMealsByDate(data);
    } catch (error) {}
  }

  // function formatMealsByDate(meals: any[]) {
  //   const grouped = meals.reduce((accumulator, meal) => {
  //     const date = meal.date;

  //     if (!accumulator[date]) {
  //       accumulator[date] = [];
  //     }

  //     accumulator[date].push({
  //       hour: meal.hour,
  //       title: meal.name,
  //       type: meal.isOnDiet ? "PRIMARY" : "SECONDARY",
  //     });

  //     return accumulator;
  //   }, {} as Record<string, RoutineItemProps[]>);

  //   return Object.keys(grouped)
  //     .sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) // ordena por data decrescente
  //     .map((date) => ({
  //       title: date,
  //       data: grouped[date].sort((a: { hour: string }, b: { hour: any }) =>
  //         a.hour.localeCompare(b.hour)
  //       ), // ordena por hora
  //     }));
  // }

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
          <RoutineItem hour={item.hour} title={item.title} type={item.type} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{ fontFamily: FONT_FAMILY.BOLD, fontSize: FONT_SIZE.XL }}
          >
            {title}
          </Text>
        )}
        ListEmptyComponent={() => <ListEmpty />}
        contentContainerStyle={dietList.length === 0 && { flex: 1 }}
      />
    </Container>
  );
}

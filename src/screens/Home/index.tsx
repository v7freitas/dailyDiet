import { Container, Text } from "./styles";

import { Header } from "@components/Header";
import { DietPercentage } from "@components/DietPercentage";
import { Button } from "@components/Button";

import { SectionList, View } from "react-native";
import { RoutineItem } from "@components/RoutineItem";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

const DATA = [
  {
    date: "01.01.2023",
    data: [
      {
        hour: "08:00",
        title: "Café da manhã",
        type: "PRIMARY",
      },
      {
        hour: "10:00",
        title: "Lanche da manhã",
        type: "SECONDARY",
      },
      {
        hour: "12:00",
        title: "Almoço",
        type: "PRIMARY",
      },
      {
        hour: "15:00",
        title: "Lanche da tarde",
        type: "SECONDARY",
      },
      {
        hour: "18:00",
        title: "Jantar",
        type: "PRIMARY",
      },
    ],
  },
  {
    date: "02.01.2023",
    data: [
      {
        hour: "08:00",
        title: "Café da manhã",
        type: "PRIMARY",
      },
      {
        hour: "10:00",
        title: "Lanche da manhã",
        type: "SECONDARY",
      },
      {
        hour: "12:00",
        title: "Almoço",
        type: "PRIMARY",
      },
      {
        hour: "15:00",
        title: "Lanche da tarde",
        type: "SECONDARY",
      },
      {
        hour: "18:00",
        title: "Jantar",
        type: "PRIMARY",
      },
    ],
  },
];

export function Home() {
  const [dietList, setDietList] = useState<[]>([]);

  const navigation = useNavigation();

  const { FONT_FAMILY, FONT_SIZE } = useTheme();

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleDietStatistics() {
    navigation.navigate("DietStatistics");
  }

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
        sections={DATA}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <RoutineItem hour={item.hour} title={item.title} type={item.type} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <Text
            style={{ fontFamily: FONT_FAMILY.BOLD, fontSize: FONT_SIZE.XL }}
          >
            {date}
          </Text>
        )}
        contentContainerStyle={dietList.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty />}
        ItemSeparatorComponent={() => <View style={{ height: 60 }} />}
      />
    </Container>
  );
}

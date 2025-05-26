import { Container, Text } from "./styles";

import { Header } from "@components/Header";
import { DietPercentage } from "@components/DietPercentage";
import { Button } from "@components/Button";

import { SectionList } from "react-native";
import { RoutineItem } from "@components/RoutineItem";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [dietList, setDietList] = useState<[]>([]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  return (
    <Container>
      <Header />
      <DietPercentage percentage={"80"} />
      <Text>Refeições</Text>
      <Button title={"Nova refeição"} onPress={handleNewMeal} />
      <SectionList
        sections={dietList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <RoutineItem hour={""} title={""} type={"PRIMARY"} />
        )}
        renderSectionHeader={({ section: { date } }) => <Text>{date}</Text>}
        contentContainerStyle={dietList.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </Container>
  );
}

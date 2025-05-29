import { Button } from "@components/Button";
import { Container, ContainerRow, Form } from "./styles";
import { HeaderMeal } from "@components/HeaderMeal";
import { Input } from "@components/Input";
import { IsOnDietButton } from "@components/IsOnDietButton";
import { useState } from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";

export type NewMealProps = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export function NewMeal() {
  const { FONT_FAMILY } = useTheme();

  const navigation = useNavigation();

  const [newMeal, setNewMeal] = useState<NewMealProps>({
    name: "",
    description: "",
    date: "",
    hour: "",
    isOnDiet: true,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setNewMeal((prev) => ({ ...prev, [field]: value }));
  };

  const isOnDietStatus = [
    { title: "Sim", type: "GREEN" },
    { title: "Não", type: "RED" },
  ];

  function handleGoBack() {
    navigation.navigate("Home");
  }

  async function handleRegisterMeal() {
    try {
      await mealCreate(JSON.stringify(newMeal));

      navigation.navigate("Feedback");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container type="DEFAULT">
      <HeaderMeal
        title="Nova refeição"
        type={"DEFAULT"}
        onPress={handleGoBack}
      />
      <Form>
        <Input
          label={"Nome"}
          value={newMeal.name}
          onChangeText={(value) => handleChange("name", value)}
        />
        <Input
          label={"Descrição"}
          isTextArea
          value={newMeal.description}
          onChangeText={(value) => handleChange("description", value)}
        />
        <ContainerRow>
          <Input
            label={"Data"}
            style={{ flex: 1 }}
            value={newMeal.date}
            onChangeText={(value) => handleChange("date", value)}
          />
          <Input
            label={"Hora"}
            style={{ flex: 1 }}
            value={newMeal.hour}
            onChangeText={(value) => handleChange("hour", value)}
          />
        </ContainerRow>
        <Text style={{ fontFamily: FONT_FAMILY.BOLD, marginBottom: 8 }}>
          Está dentro da dieta?
        </Text>
        <ContainerRow style={{ flex: 1 }}>
          {isOnDietStatus.map((item) => (
            <IsOnDietButton
              onPress={() => handleChange("isOnDiet", item.title === "Sim")}
              title={item.title}
              type={item.title === "Sim" ? "GREEN" : "RED"}
              isActive={
                (item.title === "Sim" && newMeal.isOnDiet) ||
                (item.title === "Não" && !newMeal.isOnDiet)
              }
              key={item.title}
            />
          ))}
        </ContainerRow>
        <Button title={"Cadastrar refeição"} onPress={handleRegisterMeal} />
      </Form>
    </Container>
  );
}

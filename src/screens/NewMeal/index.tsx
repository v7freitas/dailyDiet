import { Button } from "@components/Button";
import { Container, ContainerRow, Form } from "./styles";
import { HeaderMeal } from "@components/HeaderMeal";
import { Input } from "@components/Input";
import { IsOnDietButton } from "@components/IsOnDietButton";
import { useState } from "react";
import { Alert, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

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

  const dateMaskChange = (date: string) => {
    let value = date.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length >= 5) {
      value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setNewMeal((prev) => ({ ...prev, date: value }));
  };

  const hourMaskChange = (hour: string) => {
    // Remove all non-digit characters
    const cleaned = hour.replace(/\D/g, "").slice(0, 4); // Limita a 4 dígitos

    // Aplica a máscara XX:XX
    let formattedHour = cleaned;
    if (cleaned.length > 2) {
      formattedHour = cleaned.slice(0, 2) + ":" + cleaned.slice(2, 4);
    }

    //Adiciona 0 complemento :00 se necessário

    setNewMeal((prev) => ({ ...prev, hour: formattedHour }));
  };

  const isOnDietStatus = [
    { title: "Sim", type: "PRIMARY" },
    { title: "Não", type: "SECONDARY" },
  ];

  function handleGoBack() {
    navigation.navigate("Home");
    logAsyncStorage();
  }

  async function handleRegisterMeal() {
    try {
      if (
        newMeal.name.trim().length === 0 ||
        newMeal.date.trim().length === 0 ||
        newMeal.hour.trim().length === 0
      ) {
        return Alert.alert(
          "Nova refeição",
          "Por favor, preencha todos os campos obrigatórios."
        );
      }

      if (newMeal.hour.length === 2) {
        newMeal.hour += ":00"; // Adiciona ":00" se a hora tiver apenas 2 dígitos
      } else if (newMeal.hour.length === 1 && newMeal.hour !== "0") {
        newMeal.hour = "0" + newMeal.hour + ":00"; // Adiciona "0" e ":00" se a hora tiver apenas 1 dígito
      }

      await mealCreate(JSON.stringify(newMeal));

      console.log("Refeição cadastrada com sucesso!", newMeal);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        Alert.alert("Nova refeição", "Não foi possível cadastrar a refeição.");
        console.log(error);
      }
    }
  }

  const logAsyncStorage = async () => {
    const value = await mealsGetAll();
  };

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage limpo com sucesso!");
    } catch (error) {
      console.error("Erro ao limpar AsyncStorage:", error);
    }
  };

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
            onChangeText={(date) => dateMaskChange(date)}
            keyboardType="numeric"
          />
          <Input
            label={"Hora"}
            style={{ flex: 1 }}
            value={newMeal.hour}
            onChangeText={(hour) => hourMaskChange(hour)}
            keyboardType="numeric"
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
              type={item.title === "Sim" ? "PRIMARY" : "SECONDARY"}
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

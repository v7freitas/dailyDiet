import { HeaderMeal } from "@components/HeaderMeal";
import { Input } from "@components/Input";
import { IsOnDietButton } from "@components/IsOnDietButton";
import { Alert, Text } from "react-native";
import { Container, ContainerRow, Form } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { MealProps } from "@screens/NewMeal";
import { useTheme } from "styled-components/native";
import { Button } from "@components/Button";
import { mealUpdate } from "@storage/meal/mealUpdate";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

export function EditMeal() {
  const navigation = useNavigation();
  const route = useRoute();

  const { FONT_FAMILY } = useTheme();

  const { meal } = route.params as { meal: MealProps };

  function handleGoBack() {
    navigation.navigate("Home");
  }

  const [editMeal, setEditMeal] = useState<MealProps>({
    name: meal.name,
    description: meal.description,
    date: meal.date,
    hour: meal.hour,
    isOnDiet: meal.isOnDiet,
  });

  const updateMealField = (field: string, value: string | boolean) => {
    setEditMeal((prev) => ({ ...prev, [field]: value }));
  };

  const dateMaskAndFieldChange = (date: string) => {
    let dateMasked = date.replace(/\D/g, "");
    if (dateMasked.length > 8) dateMasked = dateMasked.slice(0, 8);

    if (dateMasked.length >= 5) {
      dateMasked = dateMasked.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (dateMasked.length >= 3) {
      dateMasked = dateMasked.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setEditMeal((prev) => ({ ...prev, date: dateMasked }));
  };

  const hourMaskAndFieldChange = (hour: string) => {
    // Remove all non-digit characters
    const cleaned = hour.replace(/\D/g, "").slice(0, 4); // Limita a 4 dígitos

    // Aplica a máscara XX:XX
    let formattedHour = cleaned;
    if (cleaned.length > 2) {
      formattedHour = cleaned.slice(0, 2) + ":" + cleaned.slice(2, 4);
    }

    //Adiciona 0 complemento :00 se necessário

    setEditMeal((prev) => ({ ...prev, hour: formattedHour }));
  };

  const isOnDietStatus = [
    { title: "Sim", type: "PRIMARY" },
    { title: "Não", type: "SECONDARY" },
  ];

  const logAsyncStorage = async () => {
    const value = await mealsGetAll();
    console.log("AsyncStorage meals:", value);
  };

  async function handleUpdateMeal() {
    try {
      if (
        editMeal.name.trim().length === 0 ||
        editMeal.date.trim().length === 0 ||
        editMeal.hour.trim().length === 0
      ) {
        return Alert.alert(
          "Editar refeição",
          "Preencha todas as informações para continuar."
        );
      }

      let formattedHour = editMeal.hour;

      if (formattedHour.length === 2) {
        formattedHour += ":00"; // Adiciona ":00" se a hora tiver apenas 2 dígitos
      } else if (formattedHour.length === 1 && formattedHour !== "0") {
        formattedHour = "0" + formattedHour + ":00"; // Adiciona "0" e ":00" se a hora tiver apenas 1 dígito
      }

      const updatedMeal = {
        ...editMeal,
        hour: formattedHour,
      };

      await mealUpdate(updatedMeal);

      Alert.alert("Sucesso", "Refeição editada com sucesso!");

      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Editar refeição", error.message);
      } else {
        Alert.alert("Erro", "Não foi possível editar a refeição.");
      }
    }
    logAsyncStorage();
  }

  return (
    <Container>
      <HeaderMeal
        title="Editar refeição"
        type={"DEFAULT"}
        onPress={handleGoBack}
      />
      <Form>
        <Input
          label={"Nome"}
          value={editMeal.name}
          onChangeText={(value) => updateMealField("name", value)}
        />
        <Input
          label={"Descrição"}
          isTextArea
          value={editMeal.description}
          onChangeText={(value) => updateMealField("description", value)}
        />
        <ContainerRow>
          <Input
            label={"Data"}
            style={{ flex: 1 }}
            value={editMeal.date}
            onChangeText={(date) => dateMaskAndFieldChange(date)}
            keyboardType="numeric"
          />
          <Input
            label={"Hora"}
            style={{ flex: 1 }}
            value={editMeal.hour}
            onChangeText={(hour) => hourMaskAndFieldChange(hour)}
            keyboardType="numeric"
          />
        </ContainerRow>
        <Text style={{ fontFamily: FONT_FAMILY.BOLD, marginBottom: 8 }}>
          Está dentro da dieta?
        </Text>
        <ContainerRow style={{ flex: 1 }}>
          {isOnDietStatus.map((item) => (
            <IsOnDietButton
              onPress={() => updateMealField("isOnDiet", item.title === "Sim")}
              title={item.title}
              type={item.title === "Sim" ? "PRIMARY" : "SECONDARY"}
              isActive={
                (item.title === "Sim" && editMeal.isOnDiet) ||
                (item.title === "Não" && !editMeal.isOnDiet)
              }
              key={item.title}
            />
          ))}
        </ContainerRow>
        <Button title={"Salvar alterações"} onPress={handleUpdateMeal} />
      </Form>
    </Container>
  );
}

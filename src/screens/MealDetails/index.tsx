import { HeaderMeal } from "@components/HeaderMeal";
import {
  Container,
  Content,
  DateAndTime,
  Description,
  Label,
  Name,
  StatusContainer,
  StatusIndicator,
  StatusText,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { Alert, View } from "react-native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealUpdate } from "@storage/meal/mealUpdate";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealRemove } from "@storage/meal/mealRemove";

type RouteParams = {
  type: "PRIMARY" | "SECONDARY";
  name: string;
  description: string;
  date: string;
  hour: string;
};

export function MealDetails() {
  const navigation = useNavigation();

  const route = useRoute();

  const { name, description, date, hour, type } = route?.params as RouteParams;

  function handleGoBack() {
    navigation.navigate("Home");
  }

  function handleEditMeal() {
    navigation.navigate("EditMeal", {
      meal: {
        name,
        description,
        date,
        hour,
        isOnDiet: type === "PRIMARY" ? true : false,
      },
    });
  }

  async function handleDeleteMeal(meal: MealStorageDTO) {
    try {
      Alert.alert(
        "Remover refeição",
        `Deseja remover a refeição ${meal.name}?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
            onPress: () => {
              // Do nothing on cancel
            },
          },
          {
            text: "Remover",
            style: "destructive",
            onPress: async () => {
              await mealRemove(meal);
              navigation.navigate("Home");
            },
          },
        ]
      );
    } catch (error) {
      console.log(error);
      Alert.alert("Excluir refeição", "Não foi possível excluir a refeição.");
    }
  }

  return (
    <Container type={type}>
      <HeaderMeal title="Refeição" type={type} onPress={handleGoBack} />
      <Content>
        <Name>{name}</Name>
        <View style={{ flex: 1 }}>
          <Description>{description}</Description>
          <Label>Data e hora</Label>
          <DateAndTime>
            {date} às {hour}
          </DateAndTime>
          <StatusContainer>
            <StatusIndicator type={type} />
            <StatusText>
              {type === "PRIMARY" ? "dentro da dieta" : "fora da dieta"}
            </StatusText>
          </StatusContainer>
        </View>
        <Button
          title="Editar refeição"
          style={{ marginBottom: 8 }}
          onPress={handleEditMeal}
        />
        <Button
          title="Excluir refeição"
          type="SECONDARY"
          onPress={() =>
            handleDeleteMeal({
              name,
              description,
              date,
              hour,
              isOnDiet: type === "PRIMARY" ? true : false,
            })
          }
        />
      </Content>
    </Container>
  );
}

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
import { View } from "react-native";

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
        <Button title="Editar refeição" style={{ marginBottom: 8 }} />
        <Button title="Excluir refeição" type="SECONDARY" />
      </Content>
    </Container>
  );
}

import { Button } from "@components/Button";
import { Container, ContainerRow, Form } from "./styles";
import { HeaderMeal } from "@components/HeaderMeal";
import { Input } from "@components/Input";
import { IsOnDietButton } from "@components/IsOnDietButton";
import { useState } from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const { FONT_FAMILY } = useTheme();

  const navigation = useNavigation();

  const [isActive, setIsActive] = useState(true);

  const isOnDietStatus = [
    { title: "Sim", type: "GREEN" },
    { title: "Não", type: "RED" },
  ];

  function handleGoBack() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <HeaderMeal
        title="Nova refeição"
        type={"DEFAULT"}
        onPress={handleGoBack}
      />
      <Form>
        <Input label={"Nome"} />
        <Input label={"Descrição"} isTextArea />
        <ContainerRow>
          <Input label={"Data"} style={{ flex: 1 }} />
          <Input label={"Hora"} style={{ flex: 1 }} />
        </ContainerRow>
        <Text style={{ fontFamily: FONT_FAMILY.BOLD, marginBottom: 8 }}>
          Está dentro da dieta?
        </Text>
        <ContainerRow style={{ flex: 1 }}>
          {isOnDietStatus.map((item) => (
            <IsOnDietButton
              onPress={() => setIsActive(!isActive)}
              title={item.title}
              type={item.title === "Sim" ? "GREEN" : "RED"}
              isActive={
                (item.title === "Sim" && isActive) ||
                (item.title === "Não" && !isActive)
              }
              key={item.title}
            />
          ))}
        </ContainerRow>
        <Button title={"Cadastrar refeição"} />
      </Form>
    </Container>
  );
}

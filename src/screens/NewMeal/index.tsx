import { Input } from "@components/Input";
import { View } from "react-native";
import { Container } from "./styles";
import { HeaderMeal } from "@components/HeaderMeal";
import { useTheme } from "styled-components/native";

export function NewMeal() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }}>
      <HeaderMeal title="Nova refeição" type={"DEFAULT"} />
      <Container>
        <Input />
      </Container>
    </View>
  );
}

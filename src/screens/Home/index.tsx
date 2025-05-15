import { View } from "react-native";
import { Container, Text } from "./styles";
import { Header } from "@components/Header";
import { DietPercentage } from "@components/DietPercentage";

export function Home() {
  return (
    <Container>
      <Header />
      <DietPercentage />
    </Container>
  );
}

import { Container, Text } from "./styles";
import { Header } from "@components/Header";
import { DietPercentage } from "@components/DietPercentage";
import { Button } from "@components/Button";

export function Home() {
  return (
    <Container>
      <Header />
      <DietPercentage percentage={"80"} />
      <Text>Refeições</Text>
      <Button title={"Nova refeição"} />
    </Container>
  );
}

import { Container, Description, Icon, Percentage } from "./styles";

export function DietPercentage() {
  return (
    <Container type="PRIMARY">
      <Percentage>67%</Percentage>
      <Description>das refeições dentro da dieta</Description>
      <Icon type="PRIMARY" />
    </Container>
  );
}

import { Container, Description, Icon, Percentage } from "./styles";

type Props = {
  type?: "PRIMARY" | "SECONDARY";
  percentage: string;
};

export function DietPercentage({
  type = "PRIMARY",
  percentage,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Percentage>{percentage}%</Percentage>
      <Description>
        das refeições {type === "PRIMARY" ? "dentro" : "fora"} da dieta
      </Description>
      <Icon type={type} />
    </Container>
  );
}

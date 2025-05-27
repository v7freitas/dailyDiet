import { Container, Description, Icon, Percentage } from "./styles";

type Props = {
  type?: "PRIMARY" | "SECONDARY";
  percentage: string;
  onPress?: () => void;
};

export function DietPercentage({
  type = "PRIMARY",
  percentage,
  onPress,
  ...rest
}: Props) {
  return (
    <Container type={type} onPress={onPress} {...rest}>
      <Percentage>{percentage}%</Percentage>
      <Description>
        das refeições {type === "PRIMARY" ? "dentro" : "fora"} da dieta
      </Description>
      <Icon type={type} />
    </Container>
  );
}

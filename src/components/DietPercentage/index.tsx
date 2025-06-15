import { Container, Description, Icon, Percentage } from "./styles";

type Props = {
  percentage: number;
  onPress?: () => void;
};

export function DietPercentage({ percentage, onPress, ...rest }: Props) {
  return (
    <Container
      type={percentage < 50 ? "SECONDARY" : "PRIMARY"}
      onPress={onPress}
      {...rest}
    >
      <Percentage>
        {isNaN(percentage)
          ? "Sem refeições"
          : percentage < 50
          ? 100 - percentage
          : percentage}
        {isNaN(percentage) ? "" : "%"}
      </Percentage>
      <Description>
        das refeições {percentage >= 50 ? "dentro" : "fora"} da dieta
      </Description>
      <Icon type={percentage < 50 ? "SECONDARY" : "PRIMARY"} />
    </Container>
  );
}

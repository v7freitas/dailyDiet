import {
  Container,
  BackButtonContainer,
  BackButtonIcon,
  Title,
  HeaderMealStyleButtonType,
} from "./styles";

type Props = {
  type: HeaderMealStyleButtonType;
  title: string;
};

export function HeaderMeal({ type, title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <BackButtonContainer>
        <BackButtonIcon />
      </BackButtonContainer>
      <Title>{title}</Title>
    </Container>
  );
}

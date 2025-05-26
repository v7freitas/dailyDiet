import {
  Container,
  BackButtonContainer,
  BackButtonIcon,
  Title,
  HeaderMealStyleButtonType,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: HeaderMealStyleButtonType;
  title: string;
  onPress: () => void;
};

export function HeaderMeal({ type, title, onPress, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <BackButtonContainer onPress={onPress}>
        <BackButtonIcon />
      </BackButtonContainer>
      <Title>{title}</Title>
    </Container>
  );
}

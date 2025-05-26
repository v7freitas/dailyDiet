import { TouchableOpacityProps } from "react-native";
import {
  BulletIndicator,
  Container,
  Title,
  IsOnDietButtonStyleColorProp,
} from "./styles";

type IsOnDietProps = TouchableOpacityProps & {
  title: string;
  type: IsOnDietButtonStyleColorProp;
  isActive?: boolean;
};

export function IsOnDietButton({
  title,
  type,
  isActive,
  ...rest
}: IsOnDietProps) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <BulletIndicator type={type} />
      <Title>{title}</Title>
    </Container>
  );
}

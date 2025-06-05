import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Hour,
  Title,
  DietStatus,
  Separator,
  DietStatusTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  description?: string;
  type: DietStatusTypeStyleProps;
};

export function RoutineItem({ hour, title, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Separator />
      <Title>{title}</Title>
      <DietStatus type={type} />
    </Container>
  );
}

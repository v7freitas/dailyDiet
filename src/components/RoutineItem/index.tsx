import {
  Container,
  Hour,
  Title,
  DietStatus,
  Separator,
  DietStatusTypeStyleProps,
} from "./styles";

type Props = {
  hour: string;
  title: string;
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

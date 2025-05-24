import { Container, ContainerRow, Form } from "./styles";
import { HeaderMeal } from "@components/HeaderMeal";
import { Input } from "@components/Input";

import { useTheme } from "styled-components/native";

export function NewMeal() {
  const { COLORS } = useTheme();
  return (
    <Container>
      <HeaderMeal title="Nova refeição" type={"PRIMARY"} />
      <Form>
        <Input label={"Nome"} />
        <Input label={"Descrição"} isTextArea />
        <ContainerRow>
          <Input label={"Data"} />
          <Input label={"Hora"} />
        </ContainerRow>
      </Form>
    </Container>
  );
}

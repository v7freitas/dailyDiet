import React from "react";
import {
  ButtonStyleType,
  Container,
  PencilIcon,
  PlusIcon,
  Title,
  TrashIcon,
} from "./styles";
import theme from "src/theme";

type Props = {
  title: string;
  type?: ButtonStyleType;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {title === "Nova refeição" && <PlusIcon size={18} />}
      {title === "Editar refeição" && <PencilIcon size={18} />}
      {title === "Excluir refeição" && type === "SECONDARY" && (
        <TrashIcon size={18} />
      )}
      <Title type={type}>{title}</Title>
    </Container>
  );
}

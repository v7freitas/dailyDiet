import { TouchableOpacity } from "react-native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleType = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  marginRight: 12,
}))``;

export const PencilIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  marginRight: 12,
}))``;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_1,
  marginRight: 12,
}))``;

import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 4px;
`;

export const InputContent = styled(TextInput)`
  width: 100%;

  margin-bottom: 24px;

  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}

  border-radius: 6px;
  padding: 14px;
`;

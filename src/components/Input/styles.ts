import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

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

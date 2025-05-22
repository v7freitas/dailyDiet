import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type HeaderMealStyleButtonType = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: HeaderMealStyleButtonType;
};

export const Container = styled.View<Props>`
  width: 100%;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
  padding: 24px;

  min-height: 132px;
  max-height: 132px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
  `}

  text-align: center;
  flex: 1;
`;

export const BackButtonContainer = styled(TouchableOpacity)``;

export const BackButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))``;

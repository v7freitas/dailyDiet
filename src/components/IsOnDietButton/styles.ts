import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type IsOnDietButtonStyleColorProp = "PRIMARY" | "SECONDARY";

type Props = {
  type?: string;
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  flex: 1;
  flex-direction: row;
  gap: 8px;
  background-color: ${({ theme, isActive, type }) =>
    isActive && type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : isActive && type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  border-radius: 6px;
  border: 1px solid
    ${({ theme, isActive, type }) =>
      isActive && type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : isActive && type === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const BulletIndicator = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

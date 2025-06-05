import { HeaderMealStyleButtonType } from "@components/HeaderMeal/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  type: HeaderMealStyleButtonType;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  padding: 24px;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  z-index: 1;
  margin-top: -28px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 8px;
`;

export const DateAndTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-bottom: 24px;
`;

export const StatusContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
  `}

  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;
  border-radius: 1000px;
  padding: 8px 16px;
  align-self: flex-start;
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const StatusIndicator = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 1000px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

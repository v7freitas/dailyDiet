import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { HeaderMealStyleButtonType } from "@components/HeaderMeal/styles";

type Props = {
  type: HeaderMealStyleButtonType;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "DEFAULT"
      ? theme.COLORS.GRAY_5
      : type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const Form = styled.View`
  padding: 24px;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  z-index: 1;
  margin-top: -28px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;

  gap: 24px;
`;

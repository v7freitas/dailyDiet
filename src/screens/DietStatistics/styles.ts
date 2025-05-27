import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type HeaderStatsticsStyle = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: HeaderStatsticsStyle;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderStatistic = styled.View<Props>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 34px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  min-height: 200px;
  max-height: 200px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
`;

export const BackButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
  top: 34px;
`;

export const BackButtonIcon = styled(ArrowLeft).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : type === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_1,
  })
)<Props>``;

export const Content = styled.View`
  padding: 24px;
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  z-index: 1;
  margin-top: -34px;
`;

export const ContentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-top: 9px;
  margin-bottom: 24px;
`;

export const StatisticContainer = styled.View<Props>`
  flex: 1;
  width: 100%;
  border-radius: 8px;
  min-height: 107px;
  max-height: 107px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  margin-bottom: 12px;
`;

export const DietNumberStatistic = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const ContainerRow = styled.View`
  flex-direction: row;

  gap: 12px;
`;

import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";

export type DietStatusTypeStyleProps = "PRIMARY" | "SECONDARY";

type DietProps = {
  type: DietStatusTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 49px;
  max-height: 49px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  border-radius: 6px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
    border: 1px solid ${theme.COLORS.GRAY_5};
  `}
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-right: 12px;
`;

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-left: 12px;
  flex: 1;
`;

export const DietStatus = styled.View<DietProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MIDDLE : theme.COLORS.RED_MIDDLE};
`;

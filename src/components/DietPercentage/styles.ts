import { ArrowUpRight } from "phosphor-react-native";
import { css } from "styled-components/native";
import styled from "styled-components/native";

export type ContainerTypeStyleProps = "PRIMARY" | "SECONDARY";

type DietProps = {
  type: ContainerTypeStyleProps;
};

export const Container = styled.View<DietProps>`
  flex: 1;
  min-height: 102px;
  max-height: 102px;

  margin-top: 32px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
  justify-content: center;
  align-items: center;
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
`;

export const Icon = styled(ArrowUpRight).attrs<DietProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    position: "absolute",
    top: 8,
    right: 8,
  })
)``;

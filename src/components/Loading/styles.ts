import theme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.GRAY_7};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``;

import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

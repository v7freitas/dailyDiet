import { useTheme } from "styled-components/native";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {};

export function Input({ ...rest }: Props) {
  const { COLORS } = useTheme();
  return <Container placeholderTextColor={COLORS.GRAY_1} {...rest} />;
}

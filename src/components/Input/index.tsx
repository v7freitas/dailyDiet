import { useTheme } from "styled-components/native";
import { Container, InputContent, Label } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
  isTextArea?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export function Input({
  label,
  isTextArea = false,
  value,
  onChangeText,
  ...rest
}: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      {isTextArea ? (
        <InputContent
          multiline={true}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.GRAY_1}
          style={{
            minHeight: 120,
            maxHeight: 120,
            textAlignVertical: "top",
          }}
        />
      ) : (
        <InputContent
          placeholderTextColor={COLORS.GRAY_1}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </Container>
  );
}

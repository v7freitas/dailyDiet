import { Button } from "@components/Button";
import { Container, Description, FeedbackImage, Message } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Feedback() {
  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <Message>Continue assim!</Message>
      <Description>Você continua dentro da dieta. Muito bem! </Description>
      <FeedbackImage
        source={require("@assets/FeedbackImage1/Illustration.png")}
      />
      <Button
        title={"Ir para a página inicial"}
        style={{ paddingHorizontal: 24, paddingVertical: 16 }}
        onPress={handleGoToHome}
      />
    </Container>
  );
}

import { Button } from "@components/Button";
import { Container, Description, FeedbackImage, Message } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import theme from "src/theme";
import { useTheme } from "styled-components/native";

type RouteParams = {
  status: boolean;
};

export function Feedback() {
  const navigation = useNavigation();

  const route = useRoute();
  const { FONT_FAMILY } = useTheme();

  const { status } = route?.params as RouteParams;

  function handleGoToHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <Message status={status}>
        {status ? "Continue assim!" : "Que pena!"}
      </Message>
      <Description>
        {status ? (
          <Description>
            Você continua
            <Description style={{ fontFamily: FONT_FAMILY.BOLD }}>
              {" "}
              dentro da dieta.
            </Description>{" "}
            Muito bem!
          </Description>
        ) : (
          <Description>
            Você
            <Description style={{ fontFamily: FONT_FAMILY.BOLD }}>
              {" "}
              saiu da dieta.
            </Description>{" "}
            dessa vez, mas continue se esforçando e não desista!
          </Description>
        )}
      </Description>
      <FeedbackImage
        source={
          status
            ? require("@assets/FeedbackImage1/Illustration.png")
            : require("@assets/FeedbackImage2/Illustration.png")
        }
      />
      <Button
        title={"Ir para a página inicial"}
        style={{ paddingHorizontal: 24, paddingVertical: 16 }}
        onPress={handleGoToHome}
      />
    </Container>
  );
}

import { View } from "react-native";
import {
  BackButtonContainer,
  BackButtonIcon,
  Container,
  ContainerRow,
  Content,
  ContentText,
  Description,
  DietNumberStatistic,
  HeaderStatistic,
  Percentage,
  StatisticContainer,
} from "./styles";

import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  mealCounter: number;
  mealsOnDietCounter: number;
  mealsNotOnDietCounter: number;
  mealsOnDietInSequence: number;
  dietPercentage: number;
};

export function DietStatistics() {
  const { FONT_FAMILY } = useTheme();

  const route = useRoute();
  const navigation = useNavigation();
  const {
    mealCounter,
    mealsOnDietCounter,
    mealsNotOnDietCounter,
    mealsOnDietInSequence,
    dietPercentage,
  } = route?.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type={dietPercentage >= 50 ? "PRIMARY" : "SECONDARY"}>
      <HeaderStatistic type={dietPercentage >= 50 ? "PRIMARY" : "SECONDARY"}>
        <BackButtonContainer onPress={handleGoBack}>
          <BackButtonIcon
            type={dietPercentage >= 50 ? "PRIMARY" : "SECONDARY"}
          />
        </BackButtonContainer>
        <View style={{ alignItems: "center" }}>
          <Percentage>{dietPercentage}%</Percentage>
          <Description>das refeições dentro da dieta</Description>
        </View>
      </HeaderStatistic>
      <Content>
        <ContentText style={{ fontFamily: FONT_FAMILY.BOLD }}>
          Estatísticas gerais
        </ContentText>
        <StatisticContainer type="DEFAULT">
          <DietNumberStatistic>{mealsOnDietInSequence}</DietNumberStatistic>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </StatisticContainer>
        <StatisticContainer type="DEFAULT">
          <DietNumberStatistic>{mealCounter}</DietNumberStatistic>
          <Description>refeições registradas</Description>
        </StatisticContainer>
        <ContainerRow>
          <StatisticContainer type="PRIMARY">
            <DietNumberStatistic>{mealsOnDietCounter}</DietNumberStatistic>
            <Description>refeições dentro da dieta</Description>
          </StatisticContainer>
          <StatisticContainer type="SECONDARY">
            <DietNumberStatistic>{mealsNotOnDietCounter}</DietNumberStatistic>
            <Description>refeições fora da dieta</Description>
          </StatisticContainer>
        </ContainerRow>
      </Content>
    </Container>
  );
}

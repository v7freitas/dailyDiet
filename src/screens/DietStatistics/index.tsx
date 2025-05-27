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
import { useNavigation } from "@react-navigation/native";

export function DietStatistics() {
  const { FONT_FAMILY } = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type="SECONDARY">
      <HeaderStatistic type="SECONDARY">
        <BackButtonContainer onPress={handleGoBack}>
          <BackButtonIcon type="SECONDARY" />
        </BackButtonContainer>
        <View style={{ alignItems: "center" }}>
          <Percentage>75%</Percentage>
          <Description>das refeições dentro da dieta</Description>
        </View>
      </HeaderStatistic>
      <Content>
        <ContentText style={{ fontFamily: FONT_FAMILY.BOLD }}>
          Estatísticas gerais
        </ContentText>
        <StatisticContainer type="DEFAULT">
          <DietNumberStatistic>22</DietNumberStatistic>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </StatisticContainer>
        <StatisticContainer type="DEFAULT">
          <DietNumberStatistic>109</DietNumberStatistic>
          <Description>refeições registradas</Description>
        </StatisticContainer>
        <ContainerRow>
          <StatisticContainer type="PRIMARY">
            <DietNumberStatistic>99</DietNumberStatistic>
            <Description>refeições dentro da dieta</Description>
          </StatisticContainer>
          <StatisticContainer type="SECONDARY">
            <DietNumberStatistic>10</DietNumberStatistic>
            <Description>refeições fora da dieta</Description>
          </StatisticContainer>
        </ContainerRow>
      </Content>
    </Container>
  );
}

import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { Home } from "@screens/Home";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Loading } from "@components/Loading";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}

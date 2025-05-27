import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietStatistics } from "@screens/DietStatistics";
import { Feedback } from "@screens/Feedback";

import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import theme from "src/theme";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="DietStatistics" component={DietStatistics} />
    </Stack.Navigator>
  );
}

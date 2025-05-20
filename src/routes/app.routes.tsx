import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import theme from "src/theme";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="newMeal"
        component={NewMeal}
        options={{
          headerStyle: {
            backgroundColor: COLORS.GRAY_5,
          },
          headerTitleStyle: {
            color: COLORS.GRAY_1,
            fontSize: theme.FONT_SIZE.XL,
            fontFamily: theme.FONT_FAMILY.BOLD,
          },
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

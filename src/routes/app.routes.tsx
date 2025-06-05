import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietStatistics } from "@screens/DietStatistics";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { NewMeal } from "@screens/NewMeal";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewMeal" component={NewMeal} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="DietStatistics" component={DietStatistics} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
}

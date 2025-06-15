import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export async function mealRemove(mealDeleted: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const meals = storedMeals.filter(
      (meal) =>
        meal.date !== mealDeleted.date &&
        meal.hour !== mealDeleted.hour &&
        meal.name !== mealDeleted.name
    );

    const mealKey = `${mealDeleted.date}-${mealDeleted.hour}-${mealDeleted.name}`;

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${mealKey}`);
  } catch (error) {
    throw error;
  }
}

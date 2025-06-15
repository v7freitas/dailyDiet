import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const isMealExists = storedMeals.some(
      (meal) => meal.date === newMeal.date && meal.hour === newMeal.hour
    );

    if (isMealExists) {
      throw new AppError("Você já cadastrou essa refeição.");
    }

    const storage = JSON.stringify([...(storedMeals ?? []), newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

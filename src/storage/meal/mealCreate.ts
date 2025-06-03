import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";

export async function mealCreate(newMeal: string) {
  try {
    const storedMeals = await mealsGetAll();

    const isMealExists = storedMeals?.includes(newMeal);

    if (isMealExists) {
      throw new AppError("Você já cadastrou essa refeição.");
    }

    const storage = JSON.stringify([...(storedMeals ?? []), newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

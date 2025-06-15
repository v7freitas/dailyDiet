import { AppError } from "@utils/AppError";
import { mealsGetAll } from "./mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealUpdate(updatedMeal: MealStorageDTO) {
  try {
    const storedMeal = await mealsGetAll();

    const updatedMeals = storedMeal.map((meal) => {
      if (
        meal.date === updatedMeal.date &&
        meal.hour === updatedMeal.hour &&
        meal.name === updatedMeal.name
      ) {
        return updatedMeal;
      }
      return meal;
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw new AppError(
      "Não foi possível atualizar a refeição. Tente novamente."
    );
  }
}

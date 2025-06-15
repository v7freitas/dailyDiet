export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewMeal: undefined;
      Feedback: { status: boolean };
      DietStatistics: {
        mealCounter: number;
        mealsOnDietCounter: number;
        mealsNotOnDietCounter: number;
        mealsOnDietInSequence: number;
        dietPercentage: number;
      };
      MealDetails: {
        type: "PRIMARY" | "SECONDARY";
        name: string;
        description: string;
        date: string;
        hour: string;
      };
      EditMeal: {
        meal: {
          name: string;
          description: string;
          date: string;
          hour: string;
          isOnDiet: boolean;
        };
      };
    }
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewMeal: undefined;
      Feedback: { status: boolean };
      DietStatistics: undefined;
      MealDetails: {
        type: "PRIMARY" | "SECONDARY";
        name: string;
        description: string;
        date: string;
        hour: string;
      };
    }
  }
}

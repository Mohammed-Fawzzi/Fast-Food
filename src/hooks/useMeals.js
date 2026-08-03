import { useQuery } from "@tanstack/react-query";
import {
  getAreas,
  getCategories,
  getIngredients,
  getPopularMeals,
} from "@api/meals";

export const usePopularMeals = () => {
  return useQuery({
    queryKey: ["popularMeals"],
    queryFn: getPopularMeals,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

export const useIngredients = () => {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredients,
  });
};

export const useAreas = () => {
  return useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
  });
};

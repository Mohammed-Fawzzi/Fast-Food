import axiosInstance from "./axiosInstance";

export const getPopularMeals = async () => {
  const { data } = await axiosInstance.get("/search.php", {
    params: { s: "" },
  });
  return data.meals?.slice(0, 12) ?? [];
};

export const getCategories = async () => {
  const { data } = await axiosInstance.get("/categories.php");
  return data.categories ?? [];
};

export const getIngredients = async () => {
  const { data } = await axiosInstance.get("/list.php", {
    params: { i: "list" },
  });
  return (data.meals ?? []).slice(0, 44).map((item) => ({
    ...item,
    image: `${process.env.NEXT_PUBLIC_INGREDIENTS_IMAGE_URL}/${encodeURIComponent(item.strIngredient)}.png`,
  }));
};

export const getAreas = async () => {
  const { data } = await axiosInstance.get("/list.php", {
    params: { a: "list" },
  });
  return data.meals?.slice(0, 28) ?? [];
};

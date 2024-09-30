// Fetch Api meals
export let mealsData = [];
export async function getPopular() {
  let url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
  let response = await url.json();
  mealsData = response.meals.slice(0, 24);
}
await getPopular();

// Fetch all meal categories
export let categoriesData = [];
export async function getCategories() {
  let url = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let response = await url.json();
  categoriesData = response.categories;
}
await getCategories();

// Fetch meal Ingredients
export let ingredientsData = [];
export async function getIngredients() {
  let url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
  let response = await url.json();
  ingredientsData = response.meals.slice(0, 44);
}
await getIngredients();

// Fetch all ِAreas
export let areasData = [];
export async function getAreas() {
  let url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let response = await url.json();
  areasData = response.meals.slice(0, 28);
}
await getAreas();


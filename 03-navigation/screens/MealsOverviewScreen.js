import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

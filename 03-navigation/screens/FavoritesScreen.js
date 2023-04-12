import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/FavoritesContext';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.id.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorites</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;

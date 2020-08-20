import React from 'react';
import { useSelector } from 'react-redux';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText'
import {View, StyleSheet} from 'react-native';

const CategoriesMeals = props => {
    
  const catId =  props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
    );
    if(displayMeals.length === 0){
      return <View style = {styles.content}>
        <DefaultText>No meals found, maybe check your filter</DefaultText>
      </View>
    }

    return <MealList listData ={displayMeals} navigation={props.navigation} />;
};
CategoriesMeals.navigationOptions = navigationData => {
const catId = navigationData.navigation.getParam('categoryId');
const selectedCategories = CATEGORIES.find(cat => cat.id === catId);

return {
    headerTitle: selectedCategories.title,

};

};

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default CategoriesMeals; 
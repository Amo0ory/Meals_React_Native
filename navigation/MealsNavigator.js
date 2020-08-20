import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMeals from '../screens/CategoriesMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Plafrom, Text} from 'react-native';
import Color from '../constants/Color';
import { Platform } from '@unimodules/core';
import FavoriteScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ?'white' : Color.primaryColor
    },
    headerTitleStyle:{
        fontFamily: 'open-sans-bold'
    } ,
    headerBackTitleStyle:{
        fontFamily:'opem-sans'
    },
    headerTintColor: Platform.OS === 'ios' ? Color.primaryColor:'white'
}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        headerTitle: 'Meal Categories',
       
    },
    CategoriesMeals: {
        screen: CategoriesMeals,
        
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
}
);
const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
   
    defaultNavigationOptions: defaultStackNavOptions
}
);
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name='ios-restaurant' size= {25} color='white'/>
            },
            tabBarColor: Color.primaryColor,
            tabBarLabel: Platform.OS === 'android'?   <Text style = {{fontFamily:'open-sans-bold', color:'white'}}>Meals</Text> : 'Meals'
        }
        
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name='ios-star' size={25} color='white' />
            },
            tabBarColor: Color.accentColor,
            tabBarLabel: Platform.OS === 'android'? <Text style = {{fontFamily:'open-sans', color:'white'}}>Favourites</Text>: 'Favourites'

        }
    }
    
}
const MealFavTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor:Color.accentColor,
        shifting : true ,
        barStyle: {
            backgroundColor:Color.primaryColor
        },

    })
    : createBottomTabNavigator(
        tabScreenConfig
, {
    tabBarOptions: {
        labelStyle:{
            fontFamily:'open-sans'
        },
        activeTintColor: Color.accentColor,
       
    }
});

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    
    defaultNavigationOptions: defaultStackNavOptions
});
const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Color.accentColor,
        labelStyle: {
            fontFamily:'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);

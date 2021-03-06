import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText'
const FavoriteScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals){
        return <View style ={styles.content}>
            <DefaultText>No Favorite Meals Found. Start adding some!</DefaultText>
        </View>
    }
    return <MealList listData={favMeals} navigation ={props.navigation}/>;
};

FavoriteScreen.navigationOptions =(navData) => {
    return {
    headerTitle :'Your Favourites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item 
            name="Menu" 
            iconName="ios-menu"
            onPress={() =>{navData.navigation.toggleDrawer()}}
            />
    </HeaderButtons>
    } 
}

const styles = StyleSheet.create({

    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default FavoriteScreen; 
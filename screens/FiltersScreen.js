import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Color from '../constants/Color';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals'
const FilterSwitch = props => {
    return (
        <View style = {styles.filterContainer}>
            <Text style={styles.title}>{props.label}</Text>
            <Switch 
                value={props.filterBy} 
                onValueChange={props.onChange}
                trackColor={{true: Color.primaryColor}}
                thumbColor={Platform.OS === 'android'? Color.primaryColor : ''}
            />
        </View>
    )
}

const FiltersScreen = props => {
    const { navigation} = props;
    const [isGlutenFree, setIsGlutenFree] =useState(false);
    const [isVigan, setIsVigan] =useState(false);
    const [isVegeterian, setIsVegeterian] =useState(false);
    const [isLactoseFree, setIsLactoseFree] =useState(false);
    const dispatch = useDispatch();
    const saveFilter = useCallback( () =>{
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vigan: isVigan,
            vegeterian: isVegeterian
        };
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVegeterian,isVigan, dispatch]
    );
    useEffect(() =>{
        navigation.setParams({save: saveFilter});
    }, [saveFilter]);
    return (
        <View style = {styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label='Gluten Free'
                filterBy={isGlutenFree}
                onChange={ newValue => setIsGlutenFree(newValue)}

                />
                <FilterSwitch 
                label='Lactose Free'
                filterBy={isLactoseFree}
                onChange={ newValue => setIsLactoseFree(newValue)}

                />
                <FilterSwitch 
                label='Vegan Free'
                filterBy={isVigan}
                onChange={ newValue => setIsVigan(newValue)}

                />
                <FilterSwitch 
                label='Vegeterian Free'
                filterBy={isVegeterian}
                onChange={ newValue => setIsVegeterian(newValue)}

                />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) =>{
    return {
    headerTitle: 'Filter Meals',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item 
    name="Menu" 
    iconName="ios-menu"
    color='black'
    onPress={() =>{navData.navigation.toggleDrawer()}}
    />
    </HeaderButtons>),
    headerRight:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title='Save'
            iconName='ios-save'
            onPress={navData.navigation.getParam('save')}
        />
    
        </HeaderButtons>)
    }

}
const styles = StyleSheet.create({

    screen:{
        flex:1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily:'open-sans-bold',
        alignItems:'center',
        margin:20
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%'
    }

})

export default FiltersScreen; 
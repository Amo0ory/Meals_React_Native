import React from'react';
import {TouchableOpacity, View, Text, StyleSheet, Platform} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp style = {styles.grid} onPress={props.onSelect}>
        <View 
        style ={{...styles.container, ...{backgroundColor: props.color}}}>
            <Text style = {styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
    </TouchableCmp>
        </View>

    )

}

const styles = StyleSheet.create({
    grid: {
        height: 150,
        flex: 0
    },
    container: {
        flex:1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, heigth: 2},
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 
            'hidden' : 'visible',
        elevation: 5,

    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 20,
        textAlign:'right'
    }

})





export default CategoryGridTile;
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoritesMeals);

    if (favMeals.length === 0 || !favMeals) {
        return(
            <View style={styles.content}>
                <Text style={styles.text}>No Favorite Meals Found! Start Adding Some!</Text>
            </View>
        )
    }
    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'OpenSans-Bold'
    },
    content:{
        margin:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:25,
        fontFamily:'OpenSans-Bold'
    }
})

export default FavoritesScreen

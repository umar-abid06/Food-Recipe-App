import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'
import { useSelector } from "react-redux";

const MealList = (props) => {

    const favoritesMeals = useSelector(state=> state.meals.favoritesMeals);

        const renderMealItem = (itemData) => {
            const isFavorite = favoritesMeals.some(meal=> meal.id === itemData.item.id)
            return(
                <MealItem 
                    title={itemData.item.title} 
                    image = {itemData.item.imageUrl}
                    duration = {itemData.item.duration}
                    complexity = {itemData.item.complexity}
                    affordability = {itemData.item.affordability}
                    OnSelectedMeal ={() => props.navigation.navigate('MealDetails', { mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                    isFav: isFavorite })} />
            )
        }
    return (
        <View style={styles.list}>
            <FlatList 
                style={{width:'90%'}} 
                data={props.listData}
                keyExtractor={(item, index)=> item.id } renderItem={renderMealItem} />
        </View>
    )
}
const styles =StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})
export default MealList

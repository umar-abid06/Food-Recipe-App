import React from 'react';
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/real-data";
import MealList from '../components/MealList';
import { StyleSheet, View, Text } from 'react-native';

const CategoryMealsScreen = (props) => {

   const catId =  props.route.params?.categoryID;
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

   const availableMeals = useSelector(state => state.meals.filteredMeals);
   const displayedMeals = availableMeals.filter(
       meal => meal.categoryIds.indexOf(catId) >= 0
   );
    if(displayedMeals.length === 0){
        return <View style={styles.content} >
            <Text style={styles.text}>Sorry! we have no meals for the filters you have set! Change your Filters to see respective meal items! </Text>
        </View>
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
};
const styles = StyleSheet.create({
    content:{
        margin:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:25,
        fontFamily:'OpenSans-Bold'
    }
})
export default CategoryMealsScreen;

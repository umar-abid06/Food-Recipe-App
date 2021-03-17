import React, { useCallback, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return(
        <View style={styles.listItem}>
           <Text>{props.children}</Text>
        </View>
    )
}
const MealDetails = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.route.params?.mealId;
    const currentMealIsFavorite = useSelector(state => state.meals.favoritesMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();
    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler});
    }, [toggleFavHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFavorite});
    }, [currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                   <Text>{selectedMeal.duration}m</Text> 
                   <Text>{selectedMeal.complexity.toUpperCase()}</Text> 
                   <Text>{selectedMeal.affordability.toUpperCase()}</Text> 
            </View>
            <Text style={styles.title}>Ingredients!</Text>
            {selectedMeal.ingredients.map(ingredient => 
                (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ) )}
            <Text style={styles.title}>Steps!</Text>
            {selectedMeal.steps.map(step => 
                (
                    <ListItem key={step}>{step}</ListItem>
                ) )}
        
        </ScrollView>
        
    )
}
       

const styles = StyleSheet.create({
   image:{
       width:'100%',
       height:200
   },
   details:{
       flexDirection:'row',
       padding:15,
       justifyContent:'space-around'
   },
   title:{
       fontFamily:'OpenSans-Bold',
       textAlign:'center',
       fontSize:22
   },
   listItem:{
       marginVertical:20,
       marginHorizontal:10,
       borderColor:'#ccc',
       borderWidth:1,
       padding:10

   }
})

export default MealDetails

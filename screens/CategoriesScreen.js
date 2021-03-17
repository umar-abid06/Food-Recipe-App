import React from 'react'
import {  StyleSheet,  FlatList } from 'react-native';
import { CATEGORIES } from "../data/real-data";
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = (props) => {
    const renderGridItems = (itemData) => {
        return(
               <CategoryGridTile 
                title={itemData.item.title}
                color= {itemData.item.color} onSelect={() => props.navigation.navigate('CategoryMeals', { categoryID: itemData.item.id })}/>
        )
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
    )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }, 
    
   
})

export default CategoriesScreen;

import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MealsFavTabNavigator from './navigation/NavigationMealScreen';
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
    meals:mealsReducer
})
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <MealsFavTabNavigator />
    </Provider>
    
  )
}
const styles = StyleSheet.create({
  container:{
    fontSize:40, 
    fontFamily: 'OpenSans-Regular'
  }
})

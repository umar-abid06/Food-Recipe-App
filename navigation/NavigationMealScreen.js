import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetails from '../screens/MealDetails';
import Colors  from '../constants/Colors';
import { CATEGORIES } from "../data/real-data";
import { HeaderButtons } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { toggleFavorite } from '../store/actions/meals';


const Stack = createStackNavigator();
function NavigationMealScreen() {
  return (
        <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen}
          options = {(navData) => {
            return{
              headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                 <Icon
                    size={23}
                    color='white'
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-menu" : "ios-menu"}
                    onPress={()=> {
                      navData.navigation.toggleDrawer(); }} />
              </HeaderButtons>
              ),      
                    }} 
               }/>
        <Stack.Screen name = "CategoryMeals" component={CategoryMealsScreen}
          options = {(navigationData) => {
            const catId = navigationData.route.params?.categoryID;
            const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
            return{
              headerTitle: selectedCategory.title,
              headerTitleStyle:{
                fontFamily:'OpenSans-Bold'
              },
          }
        }}
          />
        <Stack.Screen name="MealDetails" component={MealDetails}
          options = {(navigationData) => {
            
            const mealTitle = navigationData.route.params?.mealTitle;
            const toggleFavorite = navigationData.route.params?.toggleFav;
            const isFavorite = navigationData.route.params?.isFav;
         
            return{
              headerTitle: mealTitle,
              headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                 <Icon
                    size={23}
                    color='white'
                    type="ionicon"
                    name={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite} />
              </HeaderButtons>
              ),      
                    }} 
               }/>
      </Stack.Navigator>
  );
}
const DrawStack = createStackNavigator();
const DrawStackNav = () => {
  return(
    <DrawStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DrawStack.Screen name="Filters" component={FiltersScreen} 
          options = {(navData) => {
            return{
              headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                 <Icon 
                    size={23}
                    color='white'
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-menu" : "ios-menu"}
                    onPress={()=> {
                      navData.navigation.toggleDrawer(); }} />
              </HeaderButtons>
              ),   
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                   <Icon 
                      size={23}
                      color='white'
                      type="ionicon"
                      name={Platform.OS === "ios" ? "ios-save" : "ios-save"}
                      onPress={ navData.route.params?.save } />
                </HeaderButtons>
                ),    
                    }}} /> 
           
    </DrawStack.Navigator>
  )}
const Fav = createStackNavigator();
const FavStackNav = () => {
  return(
    <Fav.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
  <Fav.Screen name="Your Favorites"
          component={FavoritesScreen}
          options = {(navData) => {
            return{
              headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                 <Icon 
                    size={23}
                    color='white'
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-menu" : "ios-menu"}
                    onPress={()=> {
                      navData.navigation.toggleDrawer(); }} />
              </HeaderButtons>
              ),      
                    }}} />
</Fav.Navigator>
  );
}
const Tab = createBottomTabNavigator();
 function MealsFavTabNavigator() {
  return (
       <Tab.Navigator tabBarOptions={{
        activeTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
        activeBackgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        inactiveBackgroundColor:Platform.OS === 'android' ? Colors.primaryColor : ''
      }}>
        <Tab.Screen 
          name="Meals" 
          component={NavigationMealScreen} 
          options={{
            tabBarLabel: 'MEALS!',
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-restaurant" type='ionicons' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Favorites!" 
          component={FavStackNav}
          options={{
            tabBarLabel: 'FAVORITES!',
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-star" type='ionicons' color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    
  );
}
const Drawer = createDrawerNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
          drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
          
      }}
      >
        <Drawer.Screen name="Meals" component={MealsFavTabNavigator} 
          />
        <Drawer.Screen name="Filters" component={DrawStackNav} 
           />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
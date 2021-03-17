import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}> 
        <TouchableOpacity onPress={props.OnSelectedMeal}>
            <View>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground 
                    source={{uri: props.image}} style={styles.bgImage}
                    >
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                   <Text>{props.duration}m</Text> 
                   <Text>{props.complexity.toUpperCase()}</Text> 
                   <Text>{props.affordability.toUpperCase()}</Text> 
                </View>
            </View>
        </TouchableOpacity>
        </View>   
    )
}
const styles = StyleSheet.create({
    mealItem:{
        margin:10,
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'85%'
       
    },
    mealDetail:{
       paddingHorizontal:10,
       justifyContent:'space-between',
       alignItems:'center',
       height:'15%'
    }, 
    title:{
        fontSize:20,
        fontFamily:'OpenSans-Bold',
        color:'white',
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical:5, 
        paddingHorizontal:12,
        textAlign:'center'
    }
});
export default MealItem;

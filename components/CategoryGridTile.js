import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity  
                style={styles.gridItem} 
                onPress={props.onSelect}>
                <View style={{...styles.container,...{backgroundColor:props.color}}}>
                    <Text style={styles.text} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
        </TouchableOpacity> 
    ) 
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10     
    },
     text:{
        fontSize:21,
        fontFamily: 'OpenSans-Bold',
        textAlign:'right'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        elevation:3,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
})
export default CategoryGridTile;

import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from '../constants/Colors';


const CustomHeaderButton = props => {
    return (
        <HeaderButton
        IconComponent={Ionicons} 
        iconSize={23}
        color= {Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        {...props} />
    );
}

export default CustomHeaderButton;

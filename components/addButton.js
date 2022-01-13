import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from "../assets/design/styles";
import { Text, TouchableOpacity } from "react-native";


// standard button design 
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


export default AppButton;

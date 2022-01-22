import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from "../assets/design/styles";

//logo layout
const logo = () => (
    <Image source = { require('../assets/images/logo.png')}
        style={styles.logo}
    />

)

export default logo;

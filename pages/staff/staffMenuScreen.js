import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const menuScreen = ({ navigation, route }) => {
    const { seatNoID } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
            <Text>History</Text>
            <Text>{ parseInt(seatNoID) }</Text>
        </View>
    );
}
export default menuScreen;

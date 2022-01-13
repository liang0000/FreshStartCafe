import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../assets/design/styles';
import Logo from '../../components/logo'
import AppButton from '../../components/addButton';

  

const tableScreen = ({ navigation }) => {
    const [seatNo, setSeatNo] = React.useState('');

    return (
        <View  style={styles.bgColour}>
            <Logo />
            
            <Text style={styles.p}>Please enter your seat number:</Text>
            <TextInput style={styles.inputText}
                onChangeText={text => setSeatNo(text)}
                value={seatNo}
            />

            <View style={styles.screenContainer}>
                <AppButton title="Check Out Our Menu ->" onPress={() => navigation.push("tabNav", {
                    seatNoID: seatNo,
                })} />
            </View>
    
            {/* direct to staff login page */}
            <Button  title="Staff Login >>"  color='clear'  onPress={() => navigation.navigate("staffLoginScreen")} />

       </View>
  
    );
}
export default tableScreen;

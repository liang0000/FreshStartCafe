import { StyleSheet } from 'react-native';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { color } from 'react-native-elements/dist/helpers';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: { 
      width: 200, 
      height: 200,
      marginTop: '30%',
    }, 

    bgColour: { 
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: '#D3D3CB',
    },

    inputText: {
      height: 40, 
      width: "80%", 
      borderColor: 'gray', 
      borderWidth: 1,  
      marginBottom: '5%',
    },

    p: { 
      fontSize: '100%', 
      marginTop: '10%',
    },

    screenContainer: {
      flex: 1,
      justifyContent: "absolute",
      padding: 16,
      width: '90%',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#9c9c94",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: '100%',
    },
    appButtonText: {
      fontSize: '95%',
      color: "#333",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  
  });

  export default styles;
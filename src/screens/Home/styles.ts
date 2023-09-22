import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1E25',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title:{
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold'
    },

    input:{
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: 6,
      fontWeight: '400',
      width: '60%',
      margin: 10,
      padding: 10
    },

    btn:{
      backgroundColor: 'red',
      fontSize: 14,
      width: '60%',
      borderRadius: 6,
      margin: 10,
      marginBottom: 20,
      padding: 15,
      alignItems: 'center'
    },

    btnText:{
      color: '#fff',
      fontFamily: 'Arial',
      fontWeight: '600'
    },

    txt:{
      fontSize: 14,
      color: '#fff',
      width: '60%'
    }
  });
  
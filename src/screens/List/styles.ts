import { Button, ScrollView, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#e0b0ff',
    textShadowOffset: {width: 2, height: 2},
  },
  Input:{
    backgroundColor: 'white',
    height: 56,
    width: 250,
    borderRadius: 5,
    fontWeight: 'bold',
    padding:10,

    
  },
  texto: {
    fontSize: 20,
    color: 'black',
    // textShadowColor: '#e0b0ff',
    // textShadowOffset: {width: 2, height: 2},
    padding: 10,
    width: 350,
    backgroundColor: 'white',
    marginVertical:2,
  },
  button: {
    width:60,
    height: 56,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent:'center',

  },
  buttonText: {
    color: '#FFF0F5',
    fontWeight:'bold',
    fontSize:20,
  },
  scrollView: {
    flex:1,
  }
});

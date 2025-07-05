import { Button, ScrollView, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80,
    marginBottom:20,
  },
  InputButton:{
    flexDirection: 'row',
    gap: 5,
  },
  Input:{
    backgroundColor: 'white',
    height: 56,
    width: 250,
    borderRadius: 5,
    fontWeight: 'bold',
    padding:10,   
    marginBottom: 20, 
  },
  texto: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    width: 250,
    height:45,
    backgroundColor: 'white',
    marginVertical:1,
  },
  button: {
    width:60,
    height: 56,
    backgroundColor: '#9370DB',
    alignItems: 'center',
    justifyContent:'center',
    

  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize:20,
  },
  textTarefa:{
    color:'#D8BFD2',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollView: {
    flex:1,
    
  },
  item:{ 
    flexDirection:'row',
    gap:8,
  },
  remover:{
    width:50,
    height: 45,
    backgroundColor:'rgb(233, 120, 194)',
    alignItems: 'center',
    justifyContent:'center',

  },
  removerText:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'#FFF0F5',
  },
});

{/* importei o stylesheet para fazer a estilização da tela.*/}
import { StyleSheet } from "react-native";

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
});

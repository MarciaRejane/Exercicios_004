{/* Minha tela que ira aparecer.
  importei os componentes que foi pedido
  e importei o styles, que é a parte de estilização.
  */}
import { Text, View } from 'react-native';

import {styles} from './styles';

{/* Exportei minha tela para o App.tsx */}
export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas tarefas</Text>
    </View>
  );
}
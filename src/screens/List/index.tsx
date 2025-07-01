{/*Foi feito o input usando useState que armazena o valor e mostra o valor salvo em texto */}
import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';

import {styles} from './styles';


export default function List() {
  const [texto, setTexto] = useState('');
 
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas tarefas</Text>

      <TextInput
        style={styles.Input}
        placeholder='Digite uma tarefa'
        placeholderTextColor={'#B19cD9'}
        onChangeText={setTexto}
        value={texto}

      />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
  }
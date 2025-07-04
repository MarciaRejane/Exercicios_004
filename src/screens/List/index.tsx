import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';


export default function List() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  const handleAddTask = () => {
    if(texto.trim() !== "") {
      setTarefas([...tarefas, texto]);
    setTexto("");
    }
  };
  
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
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      {tarefas.map((tarefa, index) =>(

      <Text key={index} style={styles.texto}>{tarefa}</Text>
      ))}
    </View>
  );
  }
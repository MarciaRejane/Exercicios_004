import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';

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

  const remover = ( indexRemove:number) => {
    setTarefas(tarefas.filter((_,index) => index !== indexRemove));
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

      <ScrollView style={styles.scrollView}>
      {tarefas.map((tarefa, index) =>(
          
        <View key={index} style={styles.item}>
          <Text style={styles.texto}>{tarefa}</Text>
          <TouchableOpacity style={styles.remover} onPress={() => remover(index)}>
            <Text style={styles.removerText}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
    </View>
  );
  }
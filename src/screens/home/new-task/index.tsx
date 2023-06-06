import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';
import { useToDo } from '../context';
import ButtonCreate from '@/components/button-create';
import { palette } from '@/styles/palette';

export default function NewTask() {
  const [newTask, setNewTask] = useState('');
  const [focused, setFocused] = useState(false)
  const { addToDo } = useToDo();

  const inputBorderStyle = focused ? styles.focusedInput : styles.defaultInput;

  const handleAddNewTask = () => {
    addToDo(newTask)
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Add a new task'
        placeholderTextColor={palette.gray3}
        value={newTask}
        onChangeText={setNewTask}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{...styles.input, ...inputBorderStyle }}
      />

      <ButtonCreate onPress={handleAddNewTask} />
    </View>
  )
}
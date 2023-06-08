import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { useToDo } from '../context';
import ButtonDelete from '@/components/button-delete';
import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';
import { ToDo } from '@/props';

interface Props {
  data: ToDo;
}

export default function Task({ data }: Props) {
  const { removeToDo, toggleToDo } = useToDo();

  const handleButtonPress = () => {
    console.log('Pressed button ' + data.name)
    toggleToDo(data.id)
  }

  const isFinished = useMemo(() => {
    return data.status === ToDoStatusEnum.FINISHED
  }, [data.status]);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleButtonPress}
        style={isFinished ? styles.checkboxChecked : styles.checkboxDefault}
      ></Pressable>
      <Text style={isFinished ? styles.taskFinished : styles.taskDefault}>{data.name}</Text>
      <ButtonDelete onPress={() => removeToDo(data.id)} />
    </View>
  )
}
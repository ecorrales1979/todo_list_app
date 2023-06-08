import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'

import { styles } from './styles';
import { useToDo } from '../context';
import ButtonDelete from '@/components/button-delete';
import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';
import { ToDo } from '@/props';
import { palette } from '@/styles/palette';

interface Props {
  data: ToDo;
}

export default function Task({ data }: Props) {
  const { removeToDo, toggleToDo } = useToDo();

  const handleButtonPress = () => {
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
      >
        {isFinished && (
          <Icon name="done" size={10} color={palette.gray1} />
        )}
      </Pressable>
      <Text style={isFinished ? styles.taskFinished : styles.taskDefault}>{data.name}</Text>
      <ButtonDelete onPress={() => removeToDo(data.id)} />
    </View>
  )
}
import { Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { useToDo } from '../context';
import ButtonDelete from '@/components/button-delete';
import { ToDo } from '@/props';
import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';

interface Props {
  data: ToDo;
}

export default function Task({ data }: Props) {
  const { removeToDo, toggleToDo } = useToDo();

  const handleButtonPress = () => {
    console.log('Pressed button ' + data.name)
    toggleToDo(data.id)
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleButtonPress}
        style={data.status === ToDoStatusEnum.PENDING ? styles.checkboxDefault : styles.checkboxChecked}
      ></Pressable>
      <Text style={styles.task}>{data.name}</Text>
      <ButtonDelete onPress={() => removeToDo(data.id)} />
    </View>
  )
}
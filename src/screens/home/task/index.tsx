import { Text, View } from 'react-native';

import { styles } from './styles';
import { useToDo } from '../context';
import ButtonDelete from '@/components/button-delete';
import { ToDo } from '@/props';

interface Props {
  data: ToDo;
}

export default function Task({ data }: Props) {
  const { removeToDo } = useToDo();

  return (
    <View style={styles.container}>
      <View style={styles.defaultCheckbox}></View>
      <Text style={styles.task}>{data.name}</Text>
      <ButtonDelete onPress={() => removeToDo(data.id)} />
    </View>
  )
}
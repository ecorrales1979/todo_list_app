import { useMemo } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { useToDo } from '../context';
import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';

interface Props {
  created: number;
  finished: number;
}

export default function ListHeader() {
  const { todos } = useToDo();

  const total = useMemo(() => {
    return todos.reduce((acc, item) => acc + 1, 0);
  }, [todos])

  const finished = useMemo(() => {
    return todos
      .filter((item) => item.status === ToDoStatusEnum.FINISHED)
      .reduce((acc, item) => acc + 1, 0);
  }, [todos])

  return (
    <View style={styles.listHeader}>
      <View style={styles.headerItem}>
        <Text style={styles.createdText}>Created</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{total}</Text>
        </View>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.finishedText}>Finished</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{finished}</Text>
        </View>
      </View>
    </View>
  )
}
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import ListHeader from './list-header';
import { useToDo } from '../context';
import EmptyList from '../empty-list';
import Task from '../task';

export default function TasksList() {
  const { todos } = useToDo();

  return (
    <View style={styles.container}>
      <ListHeader />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  )
}
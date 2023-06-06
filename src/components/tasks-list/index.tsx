import { View } from 'react-native';

import { styles } from './styles';
import ListHeader from './list-header';
import EmptyList from '@/components/empty-list';

export default function TasksList() {
  return (
    <View style={styles.container}>
      <ListHeader created={0} finished={0} />

      <EmptyList />
    </View>
  )
}
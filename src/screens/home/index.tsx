import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Header from '@/components/header';
import NewTask from '@/components/new-task';
import TasksList from '@/components/tasks-list';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <NewTask />
          
          <TasksList />
        </View>

      </View>
      
    </SafeAreaView>
  )
}
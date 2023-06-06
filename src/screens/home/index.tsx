import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { ToDoProvider } from './context';
import NewTask from './new-task';
import TasksList from './tasks-list';
import Header from '@/components/header';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <ToDoProvider>
            <NewTask />

            <TasksList />
          </ToDoProvider>
        </View>

      </View>
      
    </SafeAreaView>
  )
}

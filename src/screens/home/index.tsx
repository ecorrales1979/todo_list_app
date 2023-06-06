import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Header from '@/components/header';
import NewTask from '@/components/new-task';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <NewTask />
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>

      </View>
      
    </SafeAreaView>
  )
}
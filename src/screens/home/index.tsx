import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Header from '@/components/header';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.contentContainer}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      
    </SafeAreaView>
  )
}
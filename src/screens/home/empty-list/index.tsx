import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/note.png')} />

      <View>
        <Text style={styles.message}>You don't have any tasks registered yet</Text>
        <Text style={styles.submessage}>Start creating tasks and organize your to-do items</Text>
      </View>
    </View>
  )
}
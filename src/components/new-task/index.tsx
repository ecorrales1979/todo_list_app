import { TextInput, View } from 'react-native';

import { styles } from './styles';
import ButtonCreate from '@/components/button-create';
import { palette } from '@/styles/palette';

export default function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Add a new task'
        placeholderTextColor={palette.gray3}
        onChangeText={console.log}
        style={styles.input}
      />

      <ButtonCreate onPress={() => console.log('Creating...')} />
    </View>
  )
}
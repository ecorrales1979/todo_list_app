import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';
import ButtonCreate from '@/components/button-create';
import { palette } from '@/styles/palette';

export default function NewTask() {
  const [focused, setFocused] = useState(false)

  const inputBorderStyle = focused ? styles.focusedInput : styles.defaultInput;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Add a new task'
        placeholderTextColor={palette.gray3}
        onChangeText={console.log}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{...styles.input, ...inputBorderStyle }}
      />

      <ButtonCreate onPress={() => console.log('Creating...')} />
    </View>
  )
}
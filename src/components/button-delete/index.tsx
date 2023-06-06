import { Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'

import { styles } from './styles';
import { palette } from '@/styles/palette';

interface Props {
  onPress: () => void;
}

export default function ButtonDelete({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed ? styles.buttonPressed : styles.buttonDefault}
    >
      {({ pressed }) => {
        const color = pressed ? palette.danger : palette.gray3
        return (
          <Icon name="delete" size={14} color={color} />
        )
      }}
    </Pressable>
  )
}
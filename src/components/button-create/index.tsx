import { Pressable } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'

import { styles } from './styles';
import { palette } from '@/styles/palette';

interface Props {
  onPress: () => void;
}

export default function ButtonCreate({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed ? styles.buttonPressed : styles.buttonDefault}
    >
      <Icon name="add-circle-outline" size={16} color={palette.gray1} />
    </Pressable>
  )
}
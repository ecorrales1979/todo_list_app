import { Text, View } from 'react-native';

import { styles } from './styles';
import Rocket from '../icons/rocket';

export default function Header() {
  return (
    <View style={styles.container}>
      <Rocket />

      <View style={styles.text}>
        <Text style={styles.textFirst}>to</Text>
        <Text style={styles.textLast}>do</Text>
      </View>
    </View>
  )
}
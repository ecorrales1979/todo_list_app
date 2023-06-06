import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  created: number;
  finished: number;
}

export default function ListHeader({ created, finished }: Props) {
  return (
    <View style={styles.listHeader}>
        <View style={styles.headerItem}>
          <Text style={styles.createdText}>Created</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{created}</Text>
          </View>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.finishedText}>Finished</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{finished}</Text>
          </View>
        </View>
      </View>
  )
}
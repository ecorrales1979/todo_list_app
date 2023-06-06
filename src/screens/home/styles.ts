import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray7,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: palette.gray6,
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    position: 'relative',
    top: -27,
  },
});

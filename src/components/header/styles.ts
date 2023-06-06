import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 24,
    paddingBottom: 70,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFirst: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.blue,
  },
  textLast: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.purpleDark,
  },
});

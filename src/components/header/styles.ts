import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingTop: 24,
    paddingBottom: 70,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFirst: {
    fontSize: 32,
    color: palette.blue,
    fontFamily: 'InterBold',
  },
  textLast: {
    fontSize: 32,
    color: palette.purpleDark,
    fontFamily: 'InterBold',
  },
});

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
    color: palette.blue,
    fontFamily: 'InterBold',
  },
  textLast: {
    fontSize: 26,
    color: palette.purpleDark,
    fontFamily: 'InterBold',
  },
});

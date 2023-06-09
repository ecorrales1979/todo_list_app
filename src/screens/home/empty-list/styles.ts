import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 16,
    borderTopColor: palette.gray4,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    paddingTop: 48,
    paddingBottom: 48,
  },
  message: {
    color: palette.gray3,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'InterBold',
  },
  submessage: {
    color: palette.gray3,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'InterRegular',
  },
});

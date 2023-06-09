import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 54,
    color: palette.gray1,
    fontSize: 16,
    fontFamily: 'InterRegular',
    backgroundColor: palette.gray5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 16,
  },
  defaultInput: {
    borderColor: palette.gray7,
  },
  focusedInput: {
    borderColor: palette.purpleDark,
  },
});

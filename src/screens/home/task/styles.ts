import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderRadius: 8,
    marginBottom: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: palette.gray5,
  },
  checkboxDefault: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderColor: palette.blue,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  checkboxChecked: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 999,
    backgroundColor: palette.purpleDark,
    borderColor: palette.purpleDark,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  taskDefault: {
    flex: 1,
    color: palette.gray1,
    fontFamily: 'InterRegular',
  },
  taskFinished: {
    flex: 1,
    color: palette.gray3,
    fontFamily: 'InterRegular',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});

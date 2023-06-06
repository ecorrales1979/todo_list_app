import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: palette.gray5,
  },
  defaultCheckbox: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderColor: palette.blue,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  task: {
    flex: 1,
    color: palette.gray1,
  },
});

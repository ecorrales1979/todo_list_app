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
    backgroundColor: palette.gray5,
    borderColor: palette.gray7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    padding: 16,
  },
});

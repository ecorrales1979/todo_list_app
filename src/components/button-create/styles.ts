import { palette } from '@/styles/palette';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonDefault: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    backgroundColor: palette.blueDark,
    borderRadius: 8,
  },
  buttonPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    backgroundColor: palette.blue,
    borderRadius: 8,
  },
});

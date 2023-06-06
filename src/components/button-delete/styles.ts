import { palette } from '@/styles/palette';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonDefault: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  buttonPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    backgroundColor: palette.gray4,
    borderRadius: 8,
  },
});

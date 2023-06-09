import { StyleSheet } from 'react-native';

import { palette } from '@/styles/palette';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  headerItem: {
    flexDirection: 'row',
    gap: 10,
  },
  createdText: {
    color: palette.blue,
    fontFamily: 'InterBold',
    fontSize: 14,
    lineHeight: 17,
  },
  finishedText: {
    color: palette.purple,
    fontFamily: 'InterBold',
    fontSize: 14,
    lineHeight: 17,
  },
  badge: {
    backgroundColor: palette.gray4,
    padding: 2,
    borderRadius: 999,
  },
  badgeText: {
    marginLeft: 6,
    marginRight: 6,
    color: palette.gray2,
    fontSize: 12,
    fontFamily: 'InterBold',
    lineHeight: 15,
  },
});

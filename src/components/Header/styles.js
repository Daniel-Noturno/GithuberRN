import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { color, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: color.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metric.basePadding,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.darker,
  },
  icon: {
    color: color.darker,
  },
});

export default styles;

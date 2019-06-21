import { StyleSheet } from 'react-native';
import { color, metric } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderRadius: metric.baseRadius,
    padding: metric.basePadding,
    marginTop: metric.baseMargin,
    alignItems: 'center',
    maxWidth: (metric.screamWidth - 60) / 2,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.darker,
    marginTop: metric.baseMargin,
  },
});

export default styles;

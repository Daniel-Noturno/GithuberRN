import { StyleSheet } from 'react-native';
import { color, metric } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: metric.baseRadius,
    padding: metric.basePadding,
    marginHorizontal: metric.baseMargin * 2,
    marginTop: metric.baseMargin,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metric.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metric.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: color.dark,
  },
  infoText: {
    color: color.dark,
    fontSize: 12,
    marginLeft: metric.baseMargin / 2,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { color, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lighter,
  },
  loading: {
    marginTop: metric.baseMargin * 2,
  },
  columnWrapper: {
    marginHorizontal: metric.baseMargin * 2,
    justifyContent: 'space-between',
  },
});

export default styles;

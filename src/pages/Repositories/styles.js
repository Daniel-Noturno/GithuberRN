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
});

export default styles;

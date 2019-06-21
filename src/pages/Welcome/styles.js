import { StyleSheet } from 'react-native';
import { color, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secundary,
    padding: metric.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    textAlign: 'center',
    color: color.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'center',
    marginTop: metric.baseMargin * 2,
    fontSize: 14,
    color: color.light,
    lineHeight: 21,
  },
  error: {
    color: color.danger,
    textAlign: 'center',
    marginTop: metric.baseMargin / 2,
  },
  form: {
    marginTop: metric.baseMargin * 2,
  },
  input: {
    backgroundColor: color.white,
    borderRadius: metric.baseRadius,
    height: 44,
    paddingHorizontal: metric.basePadding,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: metric.baseRadius,
    height: 44,
    marginTop: metric.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;

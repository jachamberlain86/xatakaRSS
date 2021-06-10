import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    margin: 5,
    resizeMode: 'stretch',
  },
  flex: {
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default styles;

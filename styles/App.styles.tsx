import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.darker,
    borderRadius: 20,
    height: 70,
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.lighter,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: Colors.darker,
    borderRadius: 20,
    margin: 15,
    padding: 20,
  },
  cardBody: {
    color: Colors.lighter,
    padding: 10,
  },
  cardImage: {
    height: 150,
    margin: 5,
    resizeMode: 'cover',
  },
  cardTitle: {
    color: Colors.lighter,
    fontWeight: 'bold',
    padding: 10,
  },
  container: {
    padding: 20,
  },
  detailBody: {
    color: Colors.darker,
    padding: 10,
  },
  detailSubTitle: {
    color: Colors.dark,
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 10,
  },
  detailTitle: {
    color: Colors.darker,
    fontWeight: 'bold',
    padding: 10,
  },
  flex: {
    flex: 1,
  },
});

export default styles;

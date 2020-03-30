import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  dados: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#e02041',
    width: 90,
    height: 30,
    borderRadius: 7,
    marginTop: 10,
  },
  textBuscar: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
  },
  textName: {
    fontSize: 15,
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    alignItems: 'center',
    width: 280,
    height: 280,
    borderRadius: 900,
  },
});

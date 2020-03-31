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
    backgroundColor: '#e02041',
    alignItems: 'center',
    height: 30,
    width: 200,
    borderRadius: 7,
    marginTop: 10,
  },
  detailButtonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
  },
  dados: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderRadius: 8,
    width: 200,
    height: 35,
    marginTop: 10,
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
    marginTop: 7,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    alignItems: 'center',
    marginTop: 30,
    width: 230,
    height: 230,
    borderRadius: 900,
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
    textAlign: 'center',
  },
});

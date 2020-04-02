import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  textName: {
    fontSize: 20,
    marginTop: 7,
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
    textAlign: 'center',
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#e02041',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 8,
    height: 35,
    width: '35%',
  },
  Icone_avatar: {
    marginTop: 20,
    height: 230,
  },
});

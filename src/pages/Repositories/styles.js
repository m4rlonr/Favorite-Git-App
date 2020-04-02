import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 6,
  },
  dados: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  repos: {
    padding: 50,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 25,
    width: 330,
  },
  WebView: {
    marginTop: 0,
  },
  viewMap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
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
});

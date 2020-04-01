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
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 6,
  },
  detailButton: {
    backgroundColor: '#e02041',
    alignItems: 'center',
    height: 30,
    width: 200,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
  },
  detailButtonText: {
    flex: 1,
    textAlign: 'left',
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
  viewMapButton: {
    backgroundColor: 'black',
    borderRadius: 2,
  },
  viewMapButtonText: {
    color: 'white',
  },
});

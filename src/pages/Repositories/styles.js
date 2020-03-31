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
});

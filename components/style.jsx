import {StyleSheet} from 'react-native';

const mainColor = '#ECE6DB';

export default StyleSheet.create({
  wrapContainer: {
    // backgroundColor: {mainColor},
    backgroundColor: '#ECE6DB',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 16,
    fontFamily: 'Hahmlet-medium',
  },
  buttonStyle: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
    backgroundColor: '#FFFFFF',
    // boxShadow: 0px 1px 1px rgba(0, 0, 0, 0.05),
    borderRadius: 4.5,
    marginBottom: 8,
    justifyContent: 'space-between'
  },
  listItemText: {
    fontFamily: 'Hahmlet-medium',
    fontSize: 14,
  },
  chipGroup: {
    fontFamily: 'Hahmlet-medium',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  chipItem: {
    marginRight: 4,
    backgroundColor:"transparent",
    borderWidth:2,
    borderColor: '#000'
  },
  article: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 15.6,
    fontFamily: 'Hahmlet-medium',
  },
});

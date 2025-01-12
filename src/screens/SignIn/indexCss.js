import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
  textHeadingContainer: {
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  headText: {
    fontSize: 20,
    fontWeight: '800',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  loginView: {
    width: '100%',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  barView: {
    width: '35%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors?.barGrey,
  },
  loginText: {color: Colors?.TextGrey, paddingHorizontal: 5},
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnStyle: {
    marginVertical: 15,
  },
});

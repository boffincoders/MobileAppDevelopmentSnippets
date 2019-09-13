import {StyleSheet} from 'react-native';
import {sizeNormalization} from '../../utils/AppUtils';
import Colors from '../../assets/Colors';
export default StyleSheet.create({
  rootScrollView: {
    width: '100%',
    backgroundColor: '#1F2B35',
    flexGrow:1,
  },
  backButtonView: {
    height: 40,
    marginLeft: 10,
    marginTop: 20,
  },
  backText: {
    fontSize: 17,
    color: Colors.WHITE,
  },
  rootView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    width: '100%',
    margin: '10%',
  },
  logoImage: {
    width: '60%',
    height: 80,
    backgroundColor: 'yellow',
  },
  loginFormView: {
    width: '100%',
    height: '100%',
    paddingLeft: '16%',
    paddingRight: '16%',
    flexDirection: 'column',
  },
  //Input Section UI Start
  headerStyle: {
    fontSize: sizeNormalization(16),
    color: Colors.WHITE,
  },
  inputStyle: {
    fontSize: sizeNormalization(16),
    color: Colors.APP_PRIMARY,
    paddingTop: 10,
    paddingBottom: 10,
  },
  errorStyle: {
    fontSize: sizeNormalization(14),
    color: Colors.RED,
  },
  // Input Section UI Ends
  forgotPassword: {
    fontSize: sizeNormalization(16),
    color: Colors.APP_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  dntHaveIdView: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dntHaveId: {
    fontSize: sizeNormalization(16),
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  clickHere: {
    fontSize: sizeNormalization(16),
    color: Colors.APP_PRIMARY,
    fontWeight: 'bold',
  },
});

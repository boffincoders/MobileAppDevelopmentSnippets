import {StyleSheet} from 'react-native';
import {sizeNormalization} from '../../utils/AppUtils';
import Colors from '../../assets/Colors';
export default StyleSheet.create({
  rootView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1F2B35',
    justifyContent: 'center',
  },
  innerView: {
    width: '100%',
    margin: '10%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '60%',
    height: 80,
  },
  loginFormView: {
    width: '100%',
    paddingTop: '10%',
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
  //Input Section UI END
  forgotPassword: {
    fontSize: sizeNormalization(16),
    color: Colors.APP_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  dntHaveIdView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    
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

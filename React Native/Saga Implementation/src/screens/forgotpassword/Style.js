import { StyleSheet } from 'react-native';
import { sizeNormalization } from '../../utils/AppUtils'
import Colors from '../../assets/Colors';
export default StyleSheet.create({
    rootScrollView: {
        height: '100%',
        width: '100%',
        backgroundColor: "#1F2B35",
    },
    rootView: {
        height: '100%',
        width: '100%',
        backgroundColor: "#1F2B35",
        justifyContent:'center'
    },
    innerView: {
        width: '100%',
        height:'100%',
        margin: '10%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center'
    },
    backButtonView:{
        backgroundColor:'red',
        height:40,
        width:40,
        marginLeft:10,
        marginTop:40,
    },
    logoImage: {
        width: '60%',
        height: 80,
        backgroundColor: 'yellow'
    },
    loginFormView: {
        width: '100%',
        paddingTop: '10%',
        paddingLeft: '16%',
        paddingRight: '16%',
        flexDirection: 'column'
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
    
})
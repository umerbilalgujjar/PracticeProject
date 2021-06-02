import React from 'react'
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View, FlatList, TextInput
} from 'react-native';
import Right from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const img=require('../assets/iphonx.png')
export default class googleSignIn extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={img} resizeMode='contain' style={styles.imageView}/>
                <Text style={styles.payWithClick}>Pay with one Click</Text>
            <Text style={styles.enjoyView}>Enjoy the feature of financial payment and {'\n'} trasfer with single click</Text>
            
             <View style={styles.secondView}>

              <View style={styles.thirdView}>
                  <Image source={require('../assets/google.png')} resizeMode='contain' style={styles.googleImg}/>
                 <Text style={styles.textView}>Sign-In with Google</Text>
                 <Right name="right" size={25} color='#000' style={{  alignSelf: 'center',marginLeft:wp(9) }} />
  
                 </View>  

                 <View style={styles.lastView}>
                  <Image source={require('../assets/fb.jpg')} resizeMode='contain' style={styles.fbText}/>
                 <Text style={styles.signInText}>Sign-In with Google</Text>
                 <Right name="right" size={25} color='#000' style={{  alignSelf: 'center',marginLeft:wp(9) }} />
  
                 </View>  



            </View>   
            
            
            
            
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageView:{
        height:hp(40),width:'100%',marginTop:wp(5)
    },
    payWithClick:{
        fontSize:wp(7),paddingHorizontal:wp(5),marginTop:wp(5)
    },
    enjoyView:{
        fontSize:wp(4),paddingHorizontal:wp(5),marginTop:wp(3)
    },
    secondView:{
        backgroundColor:'#22326E',marginTop:wp(15),flex:0.98,borderTopLeftRadius:wp(10),borderTopRightRadius:wp(10)
    },
    thirdView:{
        flexDirection:'row',height:hp(8),borderRadius:wp(3),backgroundColor:'#fff',width:wp(70),alignSelf:'center',marginTop:wp(15)
    },
    googleImg:{
        height:hp(8),width:wp(8),marginLeft:wp(10)
    },
    textView:{
        fontSize:wp(3.7),marginTop:wp(4.6),marginLeft:wp(2)
    },
    lastView:{
        flexDirection:'row',height:hp(8),borderRadius:wp(3),backgroundColor:'#fff',width:wp(70),alignSelf:'center',marginTop:wp(2)
    },
    signInText:{
        fontSize:wp(3.7),marginTop:wp(4.6),marginLeft:wp(2)
    },
    fbText:{
        height:hp(8),width:wp(8),marginLeft:wp(10)
    }

})
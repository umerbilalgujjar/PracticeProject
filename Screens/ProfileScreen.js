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
import Security from 'react-native-vector-icons/MaterialCommunityIcons';
import Men from 'react-native-vector-icons/Entypo';
import Book from 'react-native-vector-icons/Entypo';
import Home from 'react-native-vector-icons/Entypo';
import Payment from 'react-native-vector-icons/MaterialIcons';
import Scan from 'react-native-vector-icons/Ionicons';
import Men1 from 'react-native-vector-icons/FontAwesome';

import Bell from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ marginTop: wp(10), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: wp(5), }}>My Profile</Text>
                   
                    
                </View>
                <Bell name="bell-o" size={30} color='blue' style={{ alignSelf: 'flex-end',marginTop:wp(-6),paddingRight:wp(3) }} />
                
                <Image source={require('../assets/woman.png')} style={{ alignSelf: 'center', borderRadius: wp(6), width: wp(16), height: hp(10), marginTop: wp(1) }} />
                <Text style={{ alignSelf: 'center', marginTop: wp(2), fontSize: wp(5), fontWeight: 'bold' }}>Sophie Tech</Text>
                <Text style={{ alignSelf: 'center', fontSize: wp(4), }}>Consultant</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(14.7) }}>
                    <View style={{ flexDirection: 'row', marginTop: wp(5) }}>
                        <View style={{ backgroundColor: '#22326E', height: hp(11), width: wp(35), borderRadius: wp(2) }}>
                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: wp(4), marginTop: wp(4) }}>Income</Text>
                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: wp(5), marginTop: wp(2) }}>$12,88.00</Text>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: wp(5) }}>
                        <View style={{ backgroundColor: '#22326E', height: hp(11), width: wp(35), borderRadius: wp(2) }}>
                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: wp(4), marginTop: wp(4) }}>Expenses</Text>
                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: wp(5), marginTop: wp(2) }}>$12,88.00</Text>

                        </View>
                    </View>
                </View>

                <Text style={{ fontSize: wp(5), marginTop: wp(5), paddingHorizontal: wp(5) }}>General</Text>



                <View style={{ flexDirection: 'row', height: hp(8), borderRadius: wp(3), backgroundColor: '#F8F8F8', width: wp(80), alignSelf: 'center', marginTop: wp(10) }}>
                    <Security name="security" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(5) }} />
                    <Text style={{ fontSize: wp(3.7), marginTop: wp(4.6), marginLeft: wp(2), fontWeight: 'bold' }}>Security</Text>
                    <Right name="right" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(40) }} />
                </View>


                <View style={{ flexDirection: 'row', height: hp(8), borderRadius: wp(3), backgroundColor: '#F8F8F8', width: wp(80), alignSelf: 'center', marginTop: wp(3) }}>
                    <Men name="users" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(5) }} />
                    <Text style={{ fontSize: wp(3.7), marginTop: wp(4.6), marginLeft: wp(2), fontWeight: 'bold' }}>Help</Text>
                    <Right name="right" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(46) }} />
                </View>

                <View style={{ flexDirection: 'row', height: hp(8), borderRadius: wp(3), backgroundColor: '#F8F8F8', width: wp(80), alignSelf: 'center', marginTop: wp(3) }}>
                    <Book name="open-book" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(5) }} />
                    <Text style={{ fontSize: wp(3.7), marginTop: wp(4.6), marginLeft: wp(2), fontWeight: 'bold' }}>Privacypolicy</Text>
                    <Right name="right" size={25} color='#000' style={{ alignSelf: 'center', marginLeft: wp(32) }} />
                </View>




            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:wp(4),top:wp(27)}}>
            <Home name="home" size={27} color='#000' />
            <Payment name="payment" size={27} color='#000' />
            <View style={{height:wp(9),width:wp(10),backgroundColor:'#7EC8DC',borderRadius:wp(2),justifyContent:'center',}}>
            <Scan name="scan" size={27} color='#fff' style={{marginLeft:wp(1.5)}} />
            </View>
            <Payment name="payment" size={27} color='#000' />
            <Men1 name="user" size={27} color='#000' />

            </View>




            </View>
        )
    }

}
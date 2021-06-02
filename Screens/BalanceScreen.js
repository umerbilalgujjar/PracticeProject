import React from 'react';
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
import User from 'react-native-vector-icons/Entypo';
import Location from 'react-native-vector-icons/FontAwesome';
import Bag from 'react-native-vector-icons/MaterialCommunityIcons';
import Chart from 'react-native-vector-icons/Ionicons';

import Paymnet from 'react-native-vector-icons/MaterialIcons';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class AvailableMarket extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            DATA: [
                {
                    id: 1,
                    date: 'today',
                    bill: 'Electricity Bill',
                    print: '- $115',
                    picture: require('../assets/Bitmap.png')
                },

                {
                    id: 2,
                    date: 'today',
                    bill: 'Electricity Bill',
                    print: '- $115',
                    picture: require('../assets/twitter.png')
                },
                {
                    id: 3,
                    date: 'yesterday',
                    bill: 'Electricity Bill',
                    print: '- $115',
                    picture: require('../assets/Bitmap.png')
                },
                {
                    id: 4,
                    date: 'yesterday',
                    bill: 'Electricity Bill',
                    print: '- $115',
                    picture: require('../assets/instagram1.png')
                },
                {
                    id: 5,
                    date: 'today',
                    bill: 'Electricity Bill',
                    print: '- $115',
                    picture: require('../assets/Bitmap.png')
                },




            ]

        }
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstView}>
                    <Text style={styles.helloText}>Hello,</Text>
                    <User name="user" size={40} color='#000' style={styles.userStyle} />
                </View>
                <Text style={styles.jhoson}>Bemia Johson</Text>

                <View style={styles.totalBalance}>
                    <Text style={styles.money}>$84,50.00</Text>
                    <Text style={styles.totalBalace}>Total Balance</Text>
                </View>


                <View style={styles.secondView}>

                    <View style={styles.middleView}>
                        <Location name="location-arrow" size={35} color='blue' style={styles.locationView} />
                    </View>
                    <View style={styles.middleView}>
                        <Bag name="bag-personal" size={35} color='red' style={styles.locationView} />
                    </View>
                    <View style={styles.middleView}>
                        <Chart name="stats-chart" size={35} color='#60C3F0' style={styles.locationView} />
                    </View>
                    <View style={styles.middleView}>
                        <Paymnet name="payment" size={35} color='#F23DFE' style={styles.locationView} />
                    </View>

                </View>


                <View style={{ flexDirection: 'row', paddingHorizontal: wp(5), top: wp(15), justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: wp(5) }}>Transcation</Text>
                    <Text style={{ fontSize: wp(5), color: '#E1E2E6' }}>See All</Text>
                </View>

                <View style={{ flex: 0.7, top: wp(17) }}>
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'stretch', paddingHorizontal: 10, }}
                        numColumns={1}
                        horizontal={false}
                        data={this.state.DATA}
                        renderItem={({ item }) =>

                            <View style={{ flexDirection: 'row', paddingHorizontal: wp(5), marginTop: wp(3), justifyContent: 'space-between' }}>
                                <View style={{ height: hp(9), width: wp(15), backgroundColor: '#CFE3FE', borderRadius: wp(2.5), }}>
                                    <Image source={item.picture} style={{ height: hp(10), width: wp(10), resizeMode: 'contain', alignSelf: 'center' }} />
                                </View>

                                <View style={{ paddingHorizontal: wp(3), marginTop: wp(3),marginLeft:wp(-20) }}>
                                    <Text style={{ fontSize: wp(5), color: '#000', fontSize: wp(4) }}>{item.date}</Text>
                                    <Text style={{ fontSize: wp(5), color: '#000' }}>{item.bill}</Text>
                                </View>
                                <Text style={{ fontSize: wp(5), color: '#000', }}>{item.print}</Text>

                            </View>

                        }
                    />

                </View>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstView:{
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(6), marginTop: wp(7)
    },
    helloText:{
        fontSize: wp(5), marginTop: wp(3), color: 'dark'
    },
    userStyle:{
        marginTop: 5, marginLeft: 5, backgroundColor: '#EEECF9'
    },
    jhoson:{
        fontSize: wp(6), paddingHorizontal: wp(5), marginTop: wp(-2)
    },
    totalBalance:{
        flex: 0.2, backgroundColor: '#5A7BFE', borderRadius: wp(2), width: wp(90), alignSelf: 'center', marginTop: wp(5)
    },
    money:{
        fontWeight: 'bold', fontSize: wp(7), color: '#fff', marginTop: wp(5), paddingHorizontal: wp(5)
    },
    totalBalace:{
        fontSize: wp(4.5), color: '#fff', paddingHorizontal: wp(5), marginTop: wp(1.5)
    },
    secondView:{
        flexDirection: 'row', justifyContent: 'space-between', flex: 0.12, top: wp(5), paddingHorizontal: wp(10)
    },
    middleView:{
        height: hp(9), width: wp(15), backgroundColor: '#CFE3FE', borderRadius: wp(2.5)
    },
    locationView:{
        marginTop: wp(3), alignSelf: 'center'
    }

});


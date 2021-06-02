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
import ProgressCircle from 'react-native-progress-circle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

export default class AvailableMarket extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(6), marginTop: wp(7) }}>
                    <Text style={{ fontSize: wp(5), marginTop: wp(3), color: '#000', fontSize: wp(6) }}>Your Card</Text>
                    <User name="user" size={40} color='#000' style={{ marginTop: 5, marginLeft: 5, backgroundColor: '#EEECF9' }} />
                </View>

                <Image source={{ uri: 'https://freepngimg.com/thumb/atm_card/7-2-atm-card-png-clipart.png' }} style={{ height: hp(30), width: wp(90), paddingHorizontal: wp(5) }} />

                <View style={{
                    flexDirection: 'row', paddingHorizontal: wp(8), justifyContent: 'space-between', marginTop: wp(5), height: wp(30)
                }}>

                    <View style={{
                        height: wp(25), width: wp(40), borderRadius: wp(2), backgroundColor: '#fff', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 2,
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp(7), color: '#000', paddingHorizontal: wp(3), top: wp(5) }}>$135</Text>
                            <View style={{ marginTop: wp(3) }}>
                                <ProgressCircle
                                    percent={30}
                                    radius={30}
                                    borderWidth={8}
                                    color="#3399FF"
                                    shadowColor="#999"
                                    bgColor="#fff"

                                >
                                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                                </ProgressCircle>
                            </View>

                        </View>
                        <Text style={{ fontSize: wp(5), color: '#DDD', paddingHorizontal: wp(5) }}>Payment</Text>
                    </View>

                    <View style={{
                        height: wp(25), width: wp(40), borderRadius: wp(2), backgroundColor: '#fff', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 1,
                        elevation: 2,
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: wp(7), color: '#000', paddingHorizontal: wp(3), top: wp(5) }}>$135</Text>
                            <View style={{ marginTop: wp(3) }}>
                                <ProgressCircle
                                    percent={30}
                                    radius={30}
                                    borderWidth={8}
                                    color="red"
                                    shadowColor="#999"
                                    bgColor="#fff"

                                >
                                    <Text style={{ fontSize: 18 }}>{'40%'}</Text>
                                </ProgressCircle>
                            </View>

                        </View>
                        <Text style={{ fontSize: wp(5), color: '#DDD', paddingHorizontal: wp(5) }}>Payment</Text>
                    </View>


                </View>

                <View style={{ flex: 0.6, marginTop: wp(4) }}>
                    <Text style={{ fontSize: wp(7), paddingHorizontal: wp(6) }}>Statistics</Text>
                    <View style={{ flexDirection: 'row', paddingHorizontal: wp(6), justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: wp(5), }}>Budget inside Report From</Text>
                        <Text style={{ fontSize: wp(5) }}>Jan 2020</Text>

                    </View>
                    <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>

                </View>





            </View>
        )
    }

}

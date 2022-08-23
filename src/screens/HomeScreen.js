import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';


export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView >
            <ScrollView style={{
                height: Dimensions.get('window').height,
                backgroundColor: '#A259FF'
            }}>
                <View style={{
                    width: 63,
                    height: 63,
                    borderRadius: 31.5,
                    backgroundColor: '#CDFFB6',
                    marginTop: 63,
                    marginLeft: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../assets/images/D.png')} />
                </View>
                <View style={{
                    height: Dimensions.get('window').height - 312,
                    backgroundColor: '#F6F5F5',
                    marginTop: 150,
                    borderTopEndRadius: 30,
                    borderTopLeftRadius: 30,
                    alignItems: 'center',

                }}>
                    <View style={{
                        height: 105,
                        width: 105,
                        backgroundColor: '#fff',
                        borderRadius: 52.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 60
                    }}>
                        <Ionicons name="md-cube-sharp" size={50} color="black" />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 24,
                        marginHorizontal: 10,
                    }}>
                        <Text style={styles.h1}>Non-Contact</Text>
                        <Text style={styles.h1}>Deliveries</Text>
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 25,
                            fontWeight: '400',
                            fontSize: 17,
                            lineHeight: 25.5,
                            color: '#9586A8'
                        }}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 20
                    }}>
                        {/* <CustomButton navigation={navigation} label={'order now'} width= {Dimensions.get('window').width - 40}/> */}

                        <TouchableOpacity
                            onPress={()=>{navigation.navigate('OrderScreen')}}
                            style={{
                                backgroundColor: '#0BCE83',
                                borderRadius: 10,
                                height: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: Dimensions.get('window').width - 40,
                                flexDirection: 'row'
                            }}>
                            {/* {icon} */}
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: '600',
                                textTransform: 'uppercase'
                            }}>{'Order'}</Text>
                        </TouchableOpacity>


                        <Text style={{
                            color: '#9586A8',
                            textAlign: 'center',
                            fontSize: 18,
                            lineHeight: 21,
                            fontWeight: '600',
                            marginTop: 20,
                            textTransform: 'uppercase'
                        }}>Service</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        color: '#2D0C57'
    }
})
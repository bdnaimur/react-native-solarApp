import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';

export default function OrderScreen({navigation}) {
    return (
        <SafeAreaView>
            <Image source={require('../assets/images/Media.png')} style={{
                height: 358,
            }}
            />
            <ScrollView style={{
                height: Dimensions.get('window').height - 291,
                width: Dimensions.get('window').width,
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
                backgroundColor: '#F6F5F5',
                position: 'absolute',
                top: 291
                // flex: 1
            }}>
                <View style={{
                    marginHorizontal: 20
                }}>
                    <View style={{
                        marginTop: 37
                    }}>
                        <Text style={{
                            color: '#2D0C57',
                            fontSize: 33,
                            fontWeight: '700',
                            lineHeight: 41,
                            marginBottom: 16
                        }}>
                            Boston Lettuce
                        </Text>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: '#2D0C57',
                                fontWeight: '700',
                                fontSize: 35,
                                lineHeight: 44,
                                marginRight: 5
                            }}>1.10</Text>
                            <Text style={{
                                color: '#9586A8',
                                fontWeight: '400',
                                fontSize: 30,
                                lineHeight: 44
                            }}>€ / piece</Text>
                        </View>
                        <View style={{
                            marginTop: 8
                        }}>
                            <Text style={{
                                color: '#06BE77',
                                fontWeight: '500',
                                fontSize: 18,
                                lineHeight: 26
                            }}>~ 150 gr / piece</Text>
                        </View>
                        <View style={{
                            marginTop: 32
                        }}>
                            <Text style={{
                                color: '#2D0C57',
                                fontWeight: '700',
                                fontSize: 24,
                                lineHeight: 22
                            }}>
                                Spain
                            </Text>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 17,
                                color: '#9586a8',
                                lineHeight: 26,
                                marginTop: 16
                            }}>
                                Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30
                    }}>
                        <View style={{
                            height: 60,
                            width: 70,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginRight: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <MaterialIcons name="favorite-outline" size={24} color="#9586A8" />
                        </View>
                        <View style={{ flex: 1, marginRight: 20 }} onPress={() => navigation.navigate('Home')}>
                            <CustomButton
                                icon={<Ionicons name="cart" size={30} color="#fff" style={{
                                    marginRight: 10
                                }} />
                                }
                                label={'Add To Cart'}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
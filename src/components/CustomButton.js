import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { TouchableOpacity } from 'react-native-web'

export default function CustomButton({icon, label }) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
  onPress={()=>{navigation.goBack()}}
    style={{
        backgroundColor: '#0BCE83',
        borderRadius: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // width : '100%',
        flexDirection: 'row'
    }}>
        {icon}
      <Text style={{
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase'
      }}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function First() {
const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Second')}>
        <ImageBackground source={require('../images/bg.png')} style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/bell_icon.png')}/>
        </ImageBackground>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
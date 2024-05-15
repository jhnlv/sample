import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Second() {
const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('On Board')}>
        <ImageBackground source={require('../images/bg.png')} style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/footerName.png')} style={{width: 300, height: 200}}/>
        </ImageBackground>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
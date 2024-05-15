import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, Fontisto } from '@expo/vector-icons';

export default function NewReminder() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ justifyContent: 'center',flex: 1, padding: 30}}>
        <Text style={styles.textTitle}>REMINDER TITLE</Text>
        <TextInput placeholder='Enter reminder title...' style={styles.textInput}/> 

        <Text style={styles.textTitle}>DESCRIPTION</Text>
        <TextInput placeholder='Enter reminder description...' style={styles.descInput} multiline/> 

        <Text style={styles.textTitle}>DATE OF REMINDER</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput placeholder='DD/MM/YYY' style={styles.dateInput}/> 
        <TouchableOpacity style={styles.remButton}>
             <AntDesign name="calendar" size={17} color="white"/>
        </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>TIME OF REMINDER</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput placeholder='00:00 AM' style={styles.dateInput}/> 
        <TouchableOpacity style={styles.remButton}>
             <Fontisto name="clock" size={16} color="white"/>
        </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>LOCATION</Text>
        <TextInput placeholder='Enter location...' style={styles.textInput}/> 

        <View style={{alignItems: 'center', justifyContent:'center'}}>
        <Image source={require('./assets/images/footerName.png')} style={styles.footerImage}/>
      </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    textInput:{
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#D9D9D9',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    textTitle: {
        fontWeight:'bold',
        color: '#3D405B'
    },
    descInput:{
        height: 90,
        backgroundColor: '#fff',
        borderColor: '#D9D9D9',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    dateInput:{
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderColor: '#D9D9D9',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    remButton:{
        height: 40,
        width: 50,
        backgroundColor: '#DCBDFF',
        borderColor: '#D9D9D9',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerImage: {
        width: 250,
        height: 40,
        marginTop: 20,
      },
    
})
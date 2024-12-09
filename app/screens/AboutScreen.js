import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


function AboutScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
     
      <View>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 23, marginBottom: 20, marginTop: 100 }}>Our Team</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5  }}>
          <Image source={require('../../app/assets/images/member5.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Leoncio Amadore</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>Group Leader, UI/UX</Text>
        </View>
       
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5  }}>
          <Image source={require('../../app/assets/images/member3.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Ryan Laurence Dingle</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>User Persona</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5 }}>
          <Image source={require('../../app/assets/images/member1.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>John Lorenz Cleofe</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>Spacing, Backend Dev</Text>
        </View>
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5  }}>
          <Image source={require('../../app/assets/images/member4.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Carlo Cahulogan</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>Color Theory</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5  }}>
          <Image source={require('../../app/assets/images/member2.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Jhob Vincent Aguilar</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>60 30 10 Rule</Text>
        </View>
        <View style={{ width: '45%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 30, borderWidth: 5  }}>
          <Image source={require('../../app/assets/images/member6.jpg')} style={{ width: '100%', height: 100, borderRadius: 30, borderWidth: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Ma. Kassandra Werrel Baguioso</Text>
          <Text style={{ fontSize: 13, fontWeight: '', textAlign: 'center' }}>Typography</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title3: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 40,
  },
  title5: {
    borderColor: 'gray',
    padding: 20,
    backgroundColor: 'lightgray',
    borderWidth: 5,
    borderRadius: 20,
    letterSpacing: 1,
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  });

export default AboutScreen;

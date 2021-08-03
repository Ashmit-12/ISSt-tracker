import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,Platform,StatusBar, TouchableOpacityBase,
ImageBackground,Image} from 'react-native'
 
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                
                <Text style={styles.titleText}>ISS LOCATION TRACKER</Text>

                </View>
              
               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('ISSLocation')}>
                   <Text style={styles.routeText}> ISS LOCATION</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>1</Text>
<Image source={require('../assets/iss_icon.png')} style={styles.iconImage}/>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate('Meteor')}>
                   <Text style={styles.routeText}>METEORS</Text>
                   <Text style={styles.knowMore}>{"Know more --->"}</Text>
                   <Text style={styles.bgDigit}>2</Text>
                   <Image source={require('../assets/meteor_icon.png')} style={styles.MeteoriconImage}/>
               </TouchableOpacity>
               </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.35,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: '#606592',
       // borderWidth:2
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        textAlign:'center'
    
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: 'orange',
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(255,255,255, 0.6)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 125,
        width: 150,
        resizeMode: "contain",
        right: 10,
        top: -50
    },
    MeteoriconImage: {
        position: "absolute",
        height: 115,
        width: 150,
        resizeMode: "contain",
        right: 10,
        top: -50
    }
});

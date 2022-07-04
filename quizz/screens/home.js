import React from 'react';
import { Image, Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Title from '../components/title';

const Home = ({navigation}) =>{
    
    return(
        <View style={styles.container}>
            <Title titleText='The fameux Quiz'/>
            <View>
                <Image 
                style={styles.logo}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpq7s1PWZMIx2h21zxmQqvba2NTCe1OGmGw&usqp=CAU'}}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Quizz")}>
                    <Text style={styles.button_text}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height: 300,
        width: 300,
        // marginBottom:35,
        // marginLeft:35
    },
    button:{
    alignItems:'center',
    backgroundColor:'#fff',
    borderColor:'#ef233c',
    borderWidth: 3,
    borderBottomRightRadius: 20,
    borderTopLeftRadius:20,
    marginTop:30
    
},
button_text:{
    fontSize: 30,
    color: '#ef233c',
    paddingHorizontal:70,
    },
container:{
    paddingTop:40,
    alignItems:'center',
    height:'100%',

    
}
})

export default Home
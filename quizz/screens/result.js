import React from 'react';
import { Text, View , StyleSheet, Image, TouchableOpacity} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) =>{
    const {score} = route.params;
    const resultBanner = score>5? 'https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-victory-trophy-4819004-4010292.png' :'https://cdni.iconscout.com/illustration/premium/thumb/payment-failure-4320184-3598819.png'
    
    return(
        <View style={styles.container}>
            <Title titleText='Result'/>
                <Text style={styles.scoreText}>{score} / 10</Text>
            <View>
                <Image 
                style={styles.logo}
                source={{uri: resultBanner}}
                />
            </View>

            <View>
            <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate("Accueil")}>
                    <Text style={styles.button_text}>Back to Home</Text>
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
},
scoreText:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center',
    marginBottom: 45

},
})
export default Result
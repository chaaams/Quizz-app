import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = ({titleText}) =>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginVertical:60,
    },
    title:{
       fontSize:35, fontWeight:'400' 
    }
})
export default Title
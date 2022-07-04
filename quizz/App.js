import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quizz from './screens/quizz';
import Result from './screens/result';

export default function App() {
  return (

     <NavigationContainer>
       <MyStack/>
     </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal:16,
  },
});

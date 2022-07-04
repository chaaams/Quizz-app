import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quizz from '../screens/quizz';
import Result from '../screens/result';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quizz" component={Quizz} options={{headerShown:false}}/>
      <Stack.Screen name="Resultat" component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}


export default MyStack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import useAuthStore from '../store/authStore';
import HomeScreen from '../app/screens/HomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
import RegisterScreen from '../app/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    const user = useAuthStore((state) => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // Rutas protegidas
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // Rutas públicas
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
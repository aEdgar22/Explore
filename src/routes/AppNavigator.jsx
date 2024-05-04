import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/screens/HomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
import MapScreen from '../app/screens/Map';
import RestaurantScreen from '../app/screens/Restaurant';
import EventsScreen from '../app/screens/Events';
// Icons
import { Entypo, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabBarButton = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center '}}>
      <Entypo name="home" size={24}  />
    </View>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 16
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarButton: (props) => <TabBarButton {...props} />
          }}


        />
        <Tab.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="restaurant" size={24} color={color} />
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color={color} />
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="party-popper" size={24} color={color} />
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={24} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

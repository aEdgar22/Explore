import { View, Text } from 'react-native'
import React from 'react'
import useAuthStore from '../../store/authStore';
import LogoutButton from '../auth/components/LogoutButton';

const HomeScreen = () => {
 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
      <Text>Bienvenido a la App</Text>
     {/*  <LogoutButton  /> */}
    </View>
  )
}

export default HomeScreen

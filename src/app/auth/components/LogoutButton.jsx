import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuthStore from '../../../store/authStore';

export default function LogoutButton() {
    const clearUser = useAuthStore((state) => state.clearUser);

    const handleLogout = () => {
        clearUser();
    };

    return <Button title="Logout" onPress={handleLogout} />;
}
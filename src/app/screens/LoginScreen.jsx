import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import useAuthStore from '../../store/authStore';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../schemas/loginSchema';

export default function LoginScreen({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
      });

      const login = useAuthStore((state) => state.login);

      const onSubmit = data => {
        login(data.email, data.password); // Aquí se manejaría el inicio de sesión real
      };

    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Email"
                    />
                )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                        placeholder="Password"
                    />
                )}
            />
            {errors.password && <Text>{errors.password.message}</Text>}

            <Button title="Login" onPress={handleSubmit(onSubmit)} />

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>No tienes una cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
    )
}
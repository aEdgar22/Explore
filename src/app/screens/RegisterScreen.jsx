import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registrationSchema from '../../schemas/registrationSchema';

const RegisterScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = data => {
    // Aquí manejarías la lógica de registro
  };

  return (
    <View>
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

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterScreen;

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria'),
});

export default loginSchema;

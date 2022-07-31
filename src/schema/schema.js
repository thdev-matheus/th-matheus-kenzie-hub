import * as yup from "yup";
import "yup-phone";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório!")
    .min(3, "Mínimo de 3 caracteres"),

  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório!"),

  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes"),

  bio: yup.string().required("Campo obrigatório!"),

  contact: yup
    .string()
    .required("Campo obrigatório!")
    .min(10, "Digite um número válido")
    .max(11, "Digite um número válido")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Número inválido"
    ),

  course_module: yup.string().required("Campo obrigatório!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório!"),

  password: yup.string().required("Campo obrigatório!"),
});

export const modalAddSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório!"),

  status: yup.string().required("Campo obrigatório!"),
});

export const modalEditSchema = yup.object().shape({
  name: yup.string(),

  status: yup.string(),
});

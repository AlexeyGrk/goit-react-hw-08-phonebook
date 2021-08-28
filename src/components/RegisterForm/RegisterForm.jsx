import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useAddUserQuery } from "../../redux/services/userApi";
import {
  RegisterFormContainer,
  RegisterFormInput,
  RegisterFormLabel,
  RegisterFormSubmitButton,
  RegisterMainForm,
  RegistrationFormMainTitle,
  RegistrationFormMainTitleContainer,
} from "./RegisterForm.styled";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => (
    setPassword(data.password), setEmail(data.email), setName(data.name)
  );
  const { data: userData, isLoading: loading } = useAddUserQuery(
    {
      name,
      password,
      email,
    },
    {
      skip: !name,
    }
  );

  return (
    <RegisterFormContainer>
      <RegistrationFormMainTitleContainer>
        <RegistrationFormMainTitle>Registration</RegistrationFormMainTitle>
      </RegistrationFormMainTitleContainer>
      <RegisterMainForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterFormLabel htmlFor="name">
          {/* Name */}
          <RegisterFormInput
            required
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            id="name"
            {...register("name", {
              required: true,
              maxLength: 20,
              message: "error message",
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.message}</span>
          )}
        </RegisterFormLabel>
        <RegisterFormLabel htmlFor="password">
          {/* Password */}
          <RegisterFormInput
            {...register("password")}
            type="password"
            id="password"
            required
            placeholder="Password"
          />
        </RegisterFormLabel>
        <RegisterFormLabel htmlFor="email">
          {/* Email */}
          <RegisterFormInput
            placeholder="E-mail"
            required
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            {...register("email")}
            type="email"
            id="email"
          />
        </RegisterFormLabel>
        <RegisterFormSubmitButton type="submit">
          Register
        </RegisterFormSubmitButton>
      </RegisterMainForm>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

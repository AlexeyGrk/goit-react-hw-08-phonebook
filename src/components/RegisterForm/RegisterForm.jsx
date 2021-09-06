import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { setCredentials } from "../../redux/slice/authSlice";
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
  RegisterFormError,
} from "./RegisterForm.styled";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const { data: userData, error: registrationError } = useAddUserQuery(
    {
      name,
      password,
      email,
    },
    {
      skip: !name,
    }
  );

  useEffect(() => {
    if (userData) {
      try {
        dispatch(
          setCredentials({
            user: userData?.user,
            token: userData?.token,
          })
        );
        toast.success("Registration successful", {
          icon: "✅ 👤",
        });
      } catch (error) {
        toast.error(registrationError);
      }
    }
  }, [dispatch, registrationError, userData]);
  const onSubmit = (data) => (
    setPassword(data.password), setEmail(data.email), setName(data.name)
  );

  return (
    <RegisterFormContainer>
      <RegistrationFormMainTitleContainer>
        <RegistrationFormMainTitle>Sign Up</RegistrationFormMainTitle>
      </RegistrationFormMainTitleContainer>
      <RegisterMainForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterFormLabel htmlFor="name">
          <RegisterFormInput
            required
            placeholder="*Name"
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
          <RegisterFormInput
            {...register("password")}
            type="password"
            id="password"
            required
            placeholder="*Password"
          />
        </RegisterFormLabel>
        <RegisterFormLabel htmlFor="email">
          <RegisterFormInput
            placeholder="*E-mail"
            required
            // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            {...register("email")}
            type="email"
            id="email"
          />
        </RegisterFormLabel>
        <RegisterFormSubmitButton type="submit">
          Register
        </RegisterFormSubmitButton>
      </RegisterMainForm>
      {registrationError && (
        <RegisterFormError>
          An account with such mail is already registered
        </RegisterFormError>
      )}
    </RegisterFormContainer>
  );
};

export default RegisterForm;

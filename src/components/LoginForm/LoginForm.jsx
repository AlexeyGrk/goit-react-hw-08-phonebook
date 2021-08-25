import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/services/userApi";
import { LoginFormContainer, LoginMainForm } from "./LoginForm.styled";
import { setCredentials } from "../../redux/slice/authSlice";
// import { setToken } from "../../redux/slice/contactSlice";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [loginUserHook, { data: userLoginData, isLoading: isLoadingUser }] =
    useLoginUserMutation();
  if (userLoginData) {
    dispatch(
      setCredentials({
        user: userLoginData.user,
        token: userLoginData?.token,
      })
    );
  }
  const onSubmit = (data) => {
    loginUserHook({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <LoginFormContainer>
      <LoginMainForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Name
          <input {...register("email")} id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register("password")} id="password" />
        </label>
        <button type="submit">Login</button>
      </LoginMainForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

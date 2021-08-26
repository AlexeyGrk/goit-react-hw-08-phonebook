import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/services/userApi";
import { LoginFormContainer, LoginMainForm } from "./LoginForm.styled";
import { setCredentials } from "../../redux/slice/authSlice";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.setCredentials.isLogin);
  const [loginUserHook, { data: userLoginData, isLoading: isLoadingUser }] =
    useLoginUserMutation();

  useEffect(() => {
    if (userLoginData) {
      dispatch(
        setCredentials({
          user: userLoginData?.user,
          token: userLoginData?.token,
        })
      );
    }
  }, [dispatch, userLoginData]);

  const onSubmit = (data) => {
    loginUserHook({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <LoginFormContainer>
      {loggedIn ? (
        <h1>Вы уже вошли в свой аккаунт </h1>
      ) : (
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
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;

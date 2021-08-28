import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/services/userApi";
import {
  LoginFormContainer,
  LoginFormEmailInput,
  LoginFormEmailLabel,
  LoginFormMainTitle,
  LoginFormMainTitleContainer,
  LoginFormPasswordInput,
  LoginFormPasswordLabel,
  LoginFormSubmitButton,
  LoginMainForm,
} from "./LoginForm.styled";
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
      <LoginFormMainTitleContainer>
        <LoginFormMainTitle>Sign Up</LoginFormMainTitle>
      </LoginFormMainTitleContainer>

      {loggedIn ? (
        <LoginFormMainTitle>Вы уже вошли в свой аккаунт </LoginFormMainTitle>
      ) : (
        <LoginMainForm onSubmit={handleSubmit(onSubmit)}>
          <LoginFormEmailLabel htmlFor="email">
            {/* Email */}
            <LoginFormEmailInput
              placeholder="E-mail"
              required
              // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
              {...register("email")}
              type="email"
              id="email"
            />
          </LoginFormEmailLabel>
          <LoginFormPasswordLabel htmlFor="password">
            {/* Password */}
            <LoginFormPasswordInput
              required
              placeholder="Password"
              {...register("password")}
              type="password"
              id="password"
            />
          </LoginFormPasswordLabel>
          <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
        </LoginMainForm>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;

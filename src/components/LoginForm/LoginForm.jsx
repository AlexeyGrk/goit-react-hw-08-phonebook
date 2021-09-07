import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/services/userApi";
import {
  LoginFormContainer,
  LoginFormEmailInput,
  LoginFormEmailLabel,
  LoginFormErrorMessage,
  LoginFormMainTitle,
  LoginFormMainTitleContainer,
  LoginFormPasswordInput,
  LoginFormPasswordLabel,
  LoginFormSubmitButton,
  LoginMainForm,
} from "./LoginForm.styled";
import { setCredentials } from "../../redux/slice/authSlice";
import { getIsLoggedIn } from "../../redux/selectors/auth-selectors";
const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const loggedIn = useSelector(getIsLoggedIn);
  const [
    loginUserHook,
    {
      data: userLoginData,
      isLoading: isLoadingUser,
      error: errorLogin,
      isSuccess: isSuccessLogin,
    },
  ] = useLoginUserMutation();

  useEffect(() => {
    if (userLoginData) {
      dispatch(
        setCredentials({
          user: userLoginData?.user,
          token: userLoginData?.token,
        })
      );
      toast.success("Welcome to your phonebook", {
        duration: 4000,
        position: "top-center",
        icon: "👏",
      });
    }
  }, [dispatch, userLoginData]);

  const onSubmit = (data) => {
    try {
      loginUserHook({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <LoginFormContainer>
        <LoginFormMainTitleContainer>
          <LoginFormMainTitle>Login</LoginFormMainTitle>
        </LoginFormMainTitleContainer>

        {loggedIn ? (
          <LoginFormMainTitle>Вы уже вошли в свой аккаунт </LoginFormMainTitle>
        ) : (
          <LoginMainForm onSubmit={handleSubmit(onSubmit)}>
            <LoginFormEmailLabel htmlFor="email">
              <LoginFormEmailInput
                placeholder="*E-mail"
                required
                // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
                {...register("email")}
                type="email"
                id="email"
              />
            </LoginFormEmailLabel>
            <LoginFormPasswordLabel htmlFor="password">
              <LoginFormPasswordInput
                required
                placeholder="*Password"
                {...register("password")}
                type="password"
                id="password"
              />
            </LoginFormPasswordLabel>
            <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
          </LoginMainForm>
        )}
        {errorLogin && (
          <LoginFormErrorMessage>
            *Please enter a valid email address or password
          </LoginFormErrorMessage>
        )}
      </LoginFormContainer>
    </>
  );
};

export default React.memo(LoginForm);

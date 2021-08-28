import styled from "@emotion/styled/macro";

export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 5% auto;
  max-width: 600px;
  height: 400px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
export const LoginMainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginFormMainTitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px;
`;
export const LoginFormMainTitle = styled.h1`
  margin: 0 0 20px 0;
  font-weight: 300;
  font-size: 28px;
  color: tomato;
`;
export const LoginFormEmailInput = styled.input`
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  &:focus {
    border-bottom: 2px solid tomato;
    color: tomato;
    transition: 0.2s ease;
  }
`;
export const LoginFormEmailLabel = styled.label``;
export const LoginFormPasswordInput = styled.input`
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  &:focus {
    border-bottom: 2px solid tomato;
    color: tomato;
    transition: 0.2s ease;
  }
`;
export const LoginFormPasswordLabel = styled.label``;
export const LoginFormSubmitButton = styled.button`
  margin-top: 28px;
  width: 120px;
  height: 32px;
  background: tomato;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease;
  }
  &:focus {
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease;
  }
`;

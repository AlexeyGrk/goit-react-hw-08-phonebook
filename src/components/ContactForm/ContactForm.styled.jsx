import styled from "@emotion/styled/macro";
export const ContactFromContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
export const ContactMainForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed tomato;
  padding: 10px;
  margin: 10px;
`;
export const ContactFormNameLabel = styled.label``;
export const ContactFromNameInput = styled.input`
  caret-color: tomato;
  margin: 10px;
`;
export const ContactFormNumberLabel = styled.label``;
export const ContactFromNumberInput = styled.input`
  caret-color: tomato;
  margin: 10px;
`;
export const ContactFromMainButton = styled.button`
  margin: 10%;
  text-align: center;
  width: 150px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 40px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
export const ContactFromTitle = styled.h2`
  color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
`;

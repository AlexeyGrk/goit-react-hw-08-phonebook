import styled from "@emotion/styled/macro";
export const UserPanelContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserPanelUserName = styled.p`
  margin: 0 10px;
  font-weight: 600;
  border: 1px solid tomato;
`;
export const UserPanelCloseButton = styled.button`
  text-align: center;
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
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
export const UserPanelUserImg = styled.img`
  margin: 0 20px;
`;

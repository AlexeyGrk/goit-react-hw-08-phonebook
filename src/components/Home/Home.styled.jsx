import styled from "@emotion/styled/macro";
export const HomePageContainer = styled.div``;
export const HomePageMainTitle = styled.h1`
  color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  &:hover {
    color: tomato;
  }
`;
export const HomePageImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  position: absolute;
  bottom: 100%;
  left: 0;
  text-align: center;
`;
export const HomePageBottomContainer = styled.div`
  position: absolute;
  left: 5%;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  text-align: center;
`;
export const HomePageBottomText = styled.p`
  font-weight: 700;
`;
export const HomePageBottomButton = styled.button`
text-align: center;
  width: 200px;
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
`;

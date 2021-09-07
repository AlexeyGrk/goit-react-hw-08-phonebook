import React from "react";
import {
  HomePageBottomButton,
  HomePageBottomContainer,
  HomePageBottomImageContainer,
  HomePageBottomText,
  HomePageContainer,
  HomePageImage,
  HomePageMainTitle,
  HomePageImageAvatar,
} from "./Home.styled";

import mainImage from "../../images/circle-png-15279.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/selectors/auth-selectors";
const Home = () => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    <HomePageContainer>
      {/* <HomePageImage src={mainImage}></HomePageImage> */}
      <HomePageImageAvatar
        src="https://i.pravatar.cc/500"
        style={{
          borderRadius: "50%",
          width: "auto",
          height: "auto",
          padding: "15px",
        }}
      />
      <HomePageMainTitle>Hi, I'm your phonebook.&#128222;</HomePageMainTitle>
      <HomePageBottomContainer>
        <HomePageBottomText>
          I will help you to be always in touch with your friends.
        </HomePageBottomText>
        {!loggedIn ? (
          <Link to="/login">
            <HomePageBottomButton> Login</HomePageBottomButton>
          </Link>
        ) : (
          <Link to="/contacts">
            <HomePageBottomButton>&#10140; Go to contacts</HomePageBottomButton>
          </Link>
        )}
      </HomePageBottomContainer>
    </HomePageContainer>
  );
};

export default Home;

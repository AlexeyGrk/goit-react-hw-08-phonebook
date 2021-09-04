import React from "react";
import {
  HomePageBottomButton,
  HomePageBottomContainer,
  HomePageBottomText,
  HomePageContainer,
  HomePageImage,
  HomePageMainTitle,
} from "./Home.styled";

import mainImage from "../../images/pexels-tetyana-kovyrina-3651577-2.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/selectors/auth-selectors";
const Home = () => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    <HomePageContainer>
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

        <HomePageImage src={mainImage} />
      </HomePageBottomContainer>
    </HomePageContainer>
  );
};

export default Home;

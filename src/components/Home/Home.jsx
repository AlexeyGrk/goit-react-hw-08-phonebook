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
const Home = () => {
  return (
    <HomePageContainer>
      <HomePageMainTitle>Hi, I'm your phonebook.</HomePageMainTitle>
      <HomePageBottomContainer>
        <HomePageBottomText>
          I will help you to be always in touch with your friends.
        </HomePageBottomText>
        <HomePageBottomButton>Login</HomePageBottomButton>
        <HomePageImage src={mainImage} />
      </HomePageBottomContainer>
    </HomePageContainer>
  );
};

export default Home;

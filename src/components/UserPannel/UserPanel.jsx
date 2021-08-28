import React from "react";
import { useSelector } from "react-redux";
import {
  UserPanelCloseButton,
  UserPanelContainer,
  UserPanelUserImg,
  UserPanelUserName,
} from "./UserPanel.styled";

const UserPanel = () => {
  const userName = useSelector((state) => state.setCredentials.user.name); // state.setCredentials.user.name попробовать вот так

  return (
    <UserPanelContainer>
      <UserPanelUserName>{userName}</UserPanelUserName>
      {/* <userPanelUserImg></userPanelUserImg> */}

      <UserPanelCloseButton>Выйти</UserPanelCloseButton>
    </UserPanelContainer>
  );
};

export default UserPanel;

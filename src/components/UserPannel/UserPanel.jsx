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
      <UserPanelUserImg
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiuKIerNcNp1RkNAuGpRC9YhnYBBjekRUA&usqp=CAU"
        alt="avatar"
        width="20px"
      />

      <UserPanelCloseButton>Выйти</UserPanelCloseButton>
    </UserPanelContainer>
  );
};

export default UserPanel;

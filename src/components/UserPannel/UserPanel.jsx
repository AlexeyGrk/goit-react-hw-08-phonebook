import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserName,
  getUserToken,
} from "../../redux/selectors/auth-selectors";
import { useLogoutUserMutation } from "../../redux/services/userApi";
import { unSetCredentials } from "../../redux/slice/authSlice";
import {
  UserPanelCloseButton,
  UserPanelContainer,
  UserPanelUserImg,
  UserPanelUserName,
} from "./UserPanel.styled";

const UserPanel = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(getUserToken);

  const [logoutUserHook] = useLogoutUserMutation();
  const userName = useSelector(getUserName);
  const logoutFn = async () => {
    await logoutUserHook();

    dispatch(unSetCredentials());
  };
  return (
    <UserPanelContainer>
      <UserPanelUserName>{userName}</UserPanelUserName>
      <UserPanelUserImg
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiuKIerNcNp1RkNAuGpRC9YhnYBBjekRUA&usqp=CAU"
        alt="avatar"
        width="40px"
      />

      <UserPanelCloseButton onClick={() => logoutFn()}>
        Выйти
      </UserPanelCloseButton>
    </UserPanelContainer>
  );
};

export default UserPanel;

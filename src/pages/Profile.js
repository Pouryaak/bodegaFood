import React from "react";
import { useSelector } from "react-redux";
import Account from "../components/User/Account";
import { selectUser } from "../features/userSlice";
import LoginRegister from "./LoginRegister";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      {!user && <LoginRegister />}
      {user && <Account />}
    </div>
  );
}

export default Profile;

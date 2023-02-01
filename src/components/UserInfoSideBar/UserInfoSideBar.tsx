import "./UserInfoSideBar.css";
import avatar from "../../assets/avatar.png";
import rappilogo from "../../assets/rappilogo.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateI } from "../../store/slices";
import { updateUserState } from "../../store/slices/User";
import { updateUserSideBarState } from "../../store/slices/UserInfoSideBar";

import { json } from "body-parser";

export const UserInfoSideBar = () => {
  const dispatch = useDispatch();
  
  
  
  const sideBarState = useSelector<StateI>(
    (state) => state.currentUserSideBarState.value
  ) as boolean;

  const currentName = useSelector<StateI>(
    (state) => state.currentUserState.displayName
  ) as string;
  const currentEmail = useSelector<StateI>(
    (state) => state.currentUserState.email
  ) as string;
  const currentPhone = useSelector<StateI>(
    (state) => state.currentUserState.phone
  ) as string;
  const currentUid = useSelector<StateI>(
    (state) => state.currentUserState.uid
  ) as string;



  // form values initial state
  const [userData, setUserData] = useState({
    displayName: currentName || "",
    email: currentEmail || "",
    phone: currentPhone || "",
    uid: currentUid || "",
    accessToken: "",
  });

  const [oldUserData, setOldUserData] = useState({
    displayName: "",
    email: "",
    phone: "",
    uid:"",
    accessToken: "",
  });

  // form values onchange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnClickEdit = () => {
    const inputStatus = document.querySelectorAll(
      ".Input-element"
    ) as unknown as HTMLInputElement[];

    setOldUserData(userData);

    inputStatus.forEach((element) => {
      element.disabled = false;
    });

    const rappiLogo = document.querySelector(".Rappi-Logo") as HTMLElement;
    rappiLogo.style.display = "none";

    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLInputElement;
    buttonsBox.style.display = "flex";
  };

  const handleOnClickCancel = () => {
    const inputStatus = document.querySelectorAll(
      ".Input-element"
    ) as unknown as HTMLInputElement[];

    inputStatus.forEach((element, index) => {
      element.disabled = true;
    });

    const rappiLogo = document.querySelector(".Rappi-Logo") as HTMLElement;
    rappiLogo.style.display = "flex";
    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLElement;
    buttonsBox.style.display = "none";

    setUserData(oldUserData);
  };

  const handleOnClickDone = () => {
    const inputStatus = document.querySelectorAll(
      ".Input-element"
    ) as unknown as HTMLInputElement[];

    inputStatus.forEach((element, index) => {
      element.disabled = true;
    });

    const rappiLogo = document.querySelector(".Rappi-Logo") as HTMLElement;
    rappiLogo.style.display = "flex";
    const buttonsBox = document.querySelector(
      ".Buttons-Edit-Box"
    ) as HTMLElement;
    buttonsBox.style.display = "none";

    setUserData(userData);
  };

  useEffect(() => {
    dispatch(updateUserState(userData));
  }, [userData, dispatch]);

  return (
    <div className="User-Info-Box">
      <button className="close-bar-button"
      onClick={()=>dispatch(updateUserSideBarState({value:false}))}>x</button>
      <img src={avatar} alt="" className="user-img" />
      <div className="User-info-box-child">
        <button
          onClick={() => {
            handleOnClickEdit();
          }}
          className="edit-information"
        >
          Edit information <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>

      <div className="Values-inputs-box">
        <input
          name="displayName"
          className="Input-element"
          disabled={true}
          type="text"
          placeholder={"name fullname"}
          value={userData.displayName}
          onChange={handleChange}
        />
        <input
          name="email"
          className="Input-element"
          disabled={true}
          type="email"
          placeholder={"xxxx@xxxx.com"}
          value={userData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          className="Input-element"
          disabled={true}
          type="tel"
          placeholder={"000-000-0000"}
          value={userData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="Buttons-Edit-Box">
        <button className="Button-cancel" onClick={() => handleOnClickCancel()}>
          Cancel
        </button>
        <button
          className="Button-done"
          onClick={() => {
            handleOnClickDone();
          }}
        >
          Done
        </button>
      </div>
      <div className="No-Edit-Box">
        <img className="Rappi-Logo" src={rappilogo} alt="Logo Rappi" />
      </div>
    </div>
  );
};

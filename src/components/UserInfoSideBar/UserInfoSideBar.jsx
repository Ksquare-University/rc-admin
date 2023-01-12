import "./UserInfoSideBar.css";
import avatar from "../../assets/avatar.png";
import rappilogo from "../../assets/rappilogo.svg";
import { useState } from "react";

export const UserInfoSideBar = () => {
  const [currentInfo, setCurrentInfo] = useState([
    "Jose Perez APerez",
    "josePere@email.com",
    "809-574-3506",
  ]);

  const handleOnClickEdit = () => {
    const inputStatus = document.querySelectorAll(".Input-element");
    inputStatus.forEach((element) => {
      element.disabled = false;
    });

    const rappiLogo = document.querySelector(".Rappi-Logo");
    rappiLogo.style.display = "none";

    const buttonsBox = document.querySelector(".Buttons-Edit-Box");
    buttonsBox.style.display = "flex";
  };

  const handleOnClickCancel = () => {
    const inputStatus = document.querySelectorAll(".Input-element");

    inputStatus.forEach((element, index) => {
      element.disabled = true;
      element.value = currentInfo[index];
    });

    const rappiLogo = document.querySelector(".Rappi-Logo");
    rappiLogo.style.display = "flex";
    const buttonsBox = document.querySelector(".Buttons-Edit-Box");
    buttonsBox.style.display = "none";
  };

  const handleOnClickDone = () => {
    const inputStatus = document.querySelectorAll(".Input-element");
    const inputValues = [];

    inputStatus.forEach((element, index) => {
      element.disabled = true;
      inputValues.push(element.value);
    });

    const rappiLogo = document.querySelector(".Rappi-Logo");
    rappiLogo.style.display = "flex";
    const buttonsBox = document.querySelector(".Buttons-Edit-Box");
    buttonsBox.style.display = "none";
  };

  return (
    <div className="User-Info-Box">
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
          className="Input-element"
          disabled={true}
          type="text"
          placeholder={currentInfo[0]}
        />
        <input
          className="Input-element"
          disabled={true}
          type="email"
          placeholder={currentInfo[1]}
        />
        <input
          className="Input-element"
          disabled={true}
          type="tel"
          placeholder={currentInfo[2]}
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

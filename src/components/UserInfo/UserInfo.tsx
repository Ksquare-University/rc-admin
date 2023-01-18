import "./UserInfo.css";
import avatar from "../../assets/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { StateI } from "../../store/slices";
import { updateUserState } from "../../store/slices/User";



export const UserInfo = () => {

  const currentName = useSelector<StateI>(
    (state) => state.currentUserState.displayName
  ) as string;
  const currentEmail = useSelector<StateI>(
    (state) => state.currentUserState.email
  ) as string;


  
  return (
    <div className="User-Info-Box">
      <img src={avatar} alt="" className="user-img" />
      <div className="User-info-box-child">
        <span>{currentName}</span>
        <span className="role-span"> {currentEmail}</span>
      </div>
    </div>
  );
};

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
    <div className="container-father-user">
      <div className="User-Info-Box2">
        <img src={avatar} alt="" className="user-img2" />
        <div className="User-info-box-child2">
          <span> {currentName} </span>
          <span className="role-span"> {currentEmail} </span>
        </div>
      </div>
    </div>
  );
};

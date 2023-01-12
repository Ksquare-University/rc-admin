import "./UserInfo.css";
import avatar from "../../assets/avatar.png";

export const UserInfo = () => {
  return (
    <div className="User-Info-Box">
      <img src={avatar} alt="" className="user-img" />
      <div className="User-info-box-child">
        <span>Jose Perez Perez</span>
        <span className="role-span"> Role: Owner</span>
      </div>
    </div>
  );
};

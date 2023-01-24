import React from "react";
import { UpNavBar } from "../../UpNavBar/UpNavBar";
import "./style.css";
import { UserInfo } from "../../UserInfo/UserInfo";


type Props = {
  children: React.ReactNode;
};

function InformationTemplate({ children }: Props) {
  return (
    <div id="template">
      <UpNavBar />
      <div className="container-template">
        <UserInfo />
        <div className="container-interactive">{children}</div>
      </div>
    </div>
  );
}

export default InformationTemplate;

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
      <UserInfo />
      <div className="container-template">{children}</div>
    </div>
  );
}

export default InformationTemplate;

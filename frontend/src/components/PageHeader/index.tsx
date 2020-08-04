import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface props {
  title: string;
}

const PageHeader: React.FC<props> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
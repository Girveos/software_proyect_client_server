import { Button } from "antd";
import React from "react";
import Logo from "../../../assets/img/png/Logo.png";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./MenuTop.scss";

//MenuTop recibe las propiedades y se las comparte a menuSider
//Las propiedades las recibe de GeneralLayout
//Propiedad: Saber si el menu esta o no esta extendido

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
      <Button style={{width:"10px"}} type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={Logo} alt="Logo empresa" className="menu-top__left__logo"/>
      </div>
    </div>
  );
};

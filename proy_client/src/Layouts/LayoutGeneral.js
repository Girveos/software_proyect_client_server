import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuSider } from "../components/MenuComponent/MenuSider/MenuSider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuTop } from "../components/MenuComponent/MenuTop/MenuTop";
import { GithubOutlined } from "@ant-design/icons";
import "./LayoutGeneral.scss";

export const LayoutGeneral = (props) => {
  const { children } = props;
  const {Content, Header, Footer} = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className = "layout-general" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
        <Header className="layout-general__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button type="link" onClick={() => console.log("Ir a Github")}>
            <GithubOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Footer>
      </Layout>
       
    </Layout>
  );
};

import "./styles.css";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, Drawer, Layout, Menu, Tooltip, Button, Spin } from "antd";
import { GlobalContext } from "@context/GlobalContext";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReloadOutlined,
  HomeOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MainLayout = ({ children }) => {
  const { loadingPage } = useContext(GlobalContext);
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuItems([
      getItem("Home", "HOME", <HomeOutlined />),
      getItem("Órdenes", "ORDERS", <ShopOutlined />),
    ]);
  }, []);

  const onCollapse = () => {
    setCollapsed(false);
  };

  const AvatarUser = () => {
    const userName = "Cristian Arboleda";
    const first = userName?.charAt(0)?.toUpperCase();
    return (
      <Tooltip title={userName}>
        <Avatar style={{ marginRight: 15 }}>{first}</Avatar>
      </Tooltip>
    );
  };

  const onClickMenu = ({ key }) => {
    onCollapse();
    switch (key) {
      case "ORDERS":
        navigate("/orders");
        break;
      case "HOME":
        navigate("/home");
        break;
      default:
        break;
    }
  };

  const Logout = (
    <div className="container-logout">
      <LogoutOutlined className="icon-logout" title="Cerrar sesión" />
      <p> Cerrar sesión </p>
    </div>
  );

  const Title = (
    <div
      className="container-title"
      onClick={() => onClickMenu({ key: "ORDERS" })}
    >
      <p>TIENDAMIA</p>
    </div>
  );

  return (
    <Layout>
      <Drawer
        title={Title}
        placement="left"
        onClose={onCollapse}
        open={collapsed}
        width={280}
        footer={Logout}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={onClickMenu}
          items={menuItems}
        />
      </Drawer>
      <Layout>
        <Header>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="container-avatar">
            <AvatarUser />
            <Tooltip title="Recargar">
              <Button type="primary" onClick={() => window.location.reload()}>
                <ReloadOutlined />
              </Button>
            </Tooltip>
          </div>
        </Header>
        <Content>
          <Spin
            className="spin-layout"
            tip="Cargando datos..."
            spinning={loadingPage}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Outlet />
            {children}
          </Spin>
        </Content>
        <Footer>©2023 Created by Cristian Arboleda</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

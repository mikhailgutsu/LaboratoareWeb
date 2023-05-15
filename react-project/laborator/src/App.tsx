import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {Pagina2} from "./Pagina2";
import {Optiune1} from "./Optiune1";

const { SubMenu } = Menu;

function App() {
  return (
      <div className="main_cont">
      <Router>
        <Menu mode="inline">
          <Menu.Item key="home" icon={<MailOutlined />}>
            <Link to="/">Main</Link>
          </Menu.Item>
          <Menu.Item key="pagina2" icon={<AppstoreOutlined />}>
            <Link to="/pagina2">Second</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Opțiuni">
            <Menu.Item key="optiune1">
              <Link to="/optiune1">IMG-s</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <Routes>
          <Route path="/" element={<h1>Ultimul Laborator la TWEB</h1>} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/optiune1" element={<Optiune1 />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

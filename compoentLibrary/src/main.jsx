import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers/Routers.jsx";
import "antd/dist/antd.css";
import highlight from "highlight.js";
import zhCN from "antd/es/locale/zh_CN.js";
import enUS from "antd/es/locale/en_US.js"
import { ConfigProvider } from "antd";

React.highlight = highlight;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Routers />
    </ConfigProvider>
  </React.StrictMode>
);

import { Layout, Menu } from 'antd';
import './App.css'
import React, { useEffect, useState } from 'react';
import { useLocation, Route, Redirect,Switch } from 'react-router-dom'
import MonthSelect from './views/MonthSelect/index.jsx'
import TimeSelect from './views/TimeSelect/index.jsx';
import ModalList from './views/Modal/index.jsx';
const { Header, Content, Sider } = Layout;
const items1 = ['文档', '组件'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 =[
  {
    key: `MonthSelect`,
    label: `MonthSelect月份组件`,
  },
  {
    key: `TimeSelect`,
    label: `TimeSelect时间组件`,
  },
  {
    key: `ModalList`,
    label: `ModalList对话框组件`,
  },
]

const  App=(props)=> {
  const location = useLocation();  
  const pathname = location.pathname.split('/home/')[1];  
  const defaultSelectedKeys = [pathname]; // 根据页面刷新后的路由地址设置默认选中的菜单项 
  const onClick=(e)=>{
    console.log('click ', e);
    props.history.push(`/home/${e.key}`)
  }
  return (
    <Layout>
    <Header className="header">
      <div className="logo" ><img src="../public/react.svg" alt="" /> <span style={{color:'#00d9ff',fontSize:'24px'}}>Yuan</span></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['组件']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} style={{height: '100vh'}}className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          onClick={onClick}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Switch>
         <Route path='/home/MonthSelect' component={MonthSelect}></Route>
         <Route path='/home/TimeSelect' component={TimeSelect}></Route>
         <Route path='/home/ModalList' component={ModalList}></Route>
            <Redirect from="/home" to="/home/MonthSelect" exact></Redirect>
         </Switch>
        </Content>
    </Layout>
  </Layout>
  );
}

export default App;




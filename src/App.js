import React from 'react'
import CountriesList from './components/CountriesList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import About from './components/About'
import {Row, Col} from 'antd'
import Button from 'antd/es/button';
import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
    return (
        <div>
            <Router>
                <div>
                    <Layout className="layout">
                        <Header>
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}>
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div>
                                <Switch>
                                    <Route path="/" exact component={CountriesList} />
                                    <Route path="/about" component={About} />
                                    <Route path="/country/:name" component={CountryDetail} />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </div>
            </Router>
        </div>
    )
}

export default App
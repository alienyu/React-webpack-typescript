import * as React from "react";
import { Route, Switch ,Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import PageRouter from './router';
import LayoutTag  from './layoutStylets';
const {Nav}  = require('biz-comp/nav.tsx');
const { Header, Footer, Sider, Content } = Layout;



class App extends React.Component<{}, {}> {
    render() {
        return (

                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <LayoutTag>
                            <Content  className="content">
                                <Nav />
                                <PageRouter />
                            </Content>
                        </LayoutTag>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>

        )
    }
}

export default App;
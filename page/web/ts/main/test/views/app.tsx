import * as React from "react";
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Index from './index';
import PageA from './children/pageA/pageA';
import PageB from './children/pageB/pageB';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <Switch>
                            <Route exact path='/' component={Index} />
                            <Route path='/pageA' component={PageA} />
                            <Route path='/pageB' component={PageB} />
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;
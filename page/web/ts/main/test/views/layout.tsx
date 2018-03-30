import * as React from "react";
import { Route, Switch ,Redirect} from 'react-router-dom'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import HomePage from './children/home/homePage';
import PageA from './children/pageA/pageA';
import PageB from './children/pageB/pageB';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Layout className='layout'>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content className="content">
                        <Switch>
                            <Route exact path='/home' component={HomePage} />
                            <Route path='/pageA' component={PageA} />
                            <Route path='/pageB' component={PageB} />

                            <Redirect to='/home' />  {/*默认跳转到 home页面*/}
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;

// <Route exact path='/' component={HomePage} />
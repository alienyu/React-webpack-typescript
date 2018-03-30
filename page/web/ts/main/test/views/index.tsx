import * as React from "react";
import { Link } from 'react-router-dom';
import { Root } from "../components/style/style";

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Root>
                <div>
                    <div>This is default page</div>
                    <Link to={{ pathname: '/pageA' }}>Go To PageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{ pathname: '/pageB' }}>Go To PageB</Link>
                </div>
            </Root>
        )
    }
}

export default Index;
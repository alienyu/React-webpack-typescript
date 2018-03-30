import * as React from "react";
import { Link } from 'react-router-dom';
// import { Root } from "../components/style/style";
import { Root } from "@style/style";
import d2  from "@model/data2";
class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Root>
                <div>
                    <div>This is default page</div>
                    <Link to={{ pathname: '/pageA' }}>Go To PageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{ pathname: '/pageB' }}>Go To PageB</Link>
                <p>{d2.a}</p>
                <p>{d2.b}</p>
                </div>
            </Root>
        )
    }
}

export default Index;
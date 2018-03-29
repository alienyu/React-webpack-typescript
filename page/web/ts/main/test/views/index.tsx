import * as React from "react";
import { Link } from 'react-router-dom';

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div>This is default page</div>
                <Link to={{pathname: '/pageA'}}>Go To PageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname: '/pageB'}}>Go To PageB</Link>
            </div>
        )
    }
}

export default Index;
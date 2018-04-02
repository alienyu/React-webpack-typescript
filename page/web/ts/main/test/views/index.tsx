import * as React from "react";
import { Link } from 'react-router-dom';
import rocky from '@static/biz/rocky';

class Index extends React.Component<{}, {}> {

    componentDidMount() {
        rocky.api.getCompanyInfo({ name: '123321', bln: '123213321' }).then(response => {
            console.log(response);
        })

        rocky.api.postCompanyInfo({ name: '123321', bln: '123213321' }).then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <div>This is default page</div>
                <Link to={{ pathname: '/pageA' }}>Go To PageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={{ pathname: '/pageB' }}>Go To PageB</Link>
            </div>
        )
    }
}

export default Index;
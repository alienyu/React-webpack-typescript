import * as React from "react";
import { Link } from 'react-router-dom';
import  Home  from "./homePageStyle";


const rocky = require('biz-js/rocky');
const banner02 = require('biz-imgs/homeBanner02.jpg');
const banner = require('biz-imgs/homeBanner.jpg');



class HomePage extends React.Component<{}, {}> {

    componentDidMount(){
        /*rocky.api.getCompanyInfo({name:'123321',bln:'123213321'}).then(response=>{
            console.log(response);  
        })

        rocky.api.postCompanyInfo({name:'123321',bln:'123213321'}).then(response=>{
            console.log(response);  
        })*/
    }

    render() {
        return (
            <Home>
                <h2>This is default page</h2>
                <img src={banner}  className="banner"/>
                <img src={banner02}  className="banner"/>
            </Home>
        )
    }
}

export default HomePage;
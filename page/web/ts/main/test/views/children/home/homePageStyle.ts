import styled from "styled-components";
const img=require('biz-imgs/indexBanner.png')

const Home = styled.div`
    padding:10px;
    .banner{
        width:85%;
    }
    .nav{
        display: -webkit-box; 
        display: box; 
        width:510px;
        a{
             display:block;
             color:white;
             font-weight:bold;
             font-size:14px;
             -webkit-box-flex: 1; 
             box-flex: 1;
             text-align:center;
             border-right:1px solid white;
             background:gray;
             padding:5px 0;
        }
        a.hover{

        }
    }
`
module.exports = {
    Home
}
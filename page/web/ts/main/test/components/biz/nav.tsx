import * as React from "react";
import { Link,NavLink} from 'react-router-dom';
import styled from "styled-components";

const NavTag = styled.div`
    display: -webkit-box; 
    display: box; 
    width:85%;
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
         text-decoration:none;
    }
    a.hover{
        background:#1a568f
    }
`

function Nav(){
    return (<NavTag>
        <NavLink to={{ pathname: '/home' }} activeClassName='hover'>Home page</Link> 
        <NavLink to={{ pathname: '/pageA' }} activeClassName='hover'>PageA</Link> 
        <NavLink to={{ pathname: '/pageB' }} activeClassName='hover'>PageB</Link>
    </NavTag>);
}

module.exports = {
     Nav
}
//<a className="hover">Home page</a>
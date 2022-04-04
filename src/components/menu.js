import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
  
const Menu = () => {

    const Nav = styled.div`
        width:100%;
        padding:15px 0 15px 0;
        background:teal;
        margin:0;
        display:flex;
        justify-content: space-evenly;
        a,a:hover,a:active{
            color:white;
            text-decoration:none;
        }
    `;

    const NavBar = styled.div`
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        font-size: 22px;
    `;
  
    return (
        <Nav>
            <NavBar>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/users">
                    Users
                </NavLink>
            </NavBar>
        </Nav>
    );
};
  
export default Menu;
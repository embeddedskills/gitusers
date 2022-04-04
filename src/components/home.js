import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
  
const Home = () => {

    const HomeWrapper = styled.div`
        padding:100px;
        background:#fff5e2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const Button = styled.button`
        width: 200px;
        height: 51px;
        background: teal;
        box-shadow: 5px 4px #332e4a;
        border: none;
        cursor: pointer;    
    `;

    return (
        <HomeWrapper>
        <h1>
            Users
        </h1>
            <NavLink to="/users">
                <Button >Show users</Button>
            </NavLink>
        </HomeWrapper>
    );
};
  
export default Home;
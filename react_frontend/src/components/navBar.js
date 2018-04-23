import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
    /**/
}

const Block = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #B33C42;
    color: rgb(255, 255, 255);
    height: 80px;
    position sticky;

    right:0%;
    margin-left: 0%;
    left:0%;
`;

// const ImageStyle= styled.div`
//     margin-right: 5rem ;
// `;

const Text = styled.div`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom-style: solid;
    display: inline-block;
    padding: .7rem 0;
    margin: 0.5rem 2rem ;
    right: 10%;
    position: absolute;
`;

const HomeText = styled.div`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 1rem ;
    right: 33%;
    position: absolute;
`;

const LessonText = styled.div`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 1rem ;
    right: 20%;
    position: absolute;
`;
const LogText = styled.div`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 1rem ;
    right: 8%;
    position: absolute;
`;


export const NavBar = () => (
    <div>
        <Block>
            <img className="img-fluid" src="https://lwb-logo.now.sh" alt="logo" height="100%" />
            <Link to="/"><HomeText className="navbar" >Home</HomeText></Link>
            <Link to="/student"><LessonText className="navbar">Lessons</LessonText></Link>
            <LogText className="navbar">Logout</LogText>
        </Block>
    </div>
);
export default NavBar;

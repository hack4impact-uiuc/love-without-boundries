import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import environment from '../relay/environment';
import Login from '../components/login';

import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit, InitialStudentSetup } from '../Gapi';

type Props = {
    /**/
}
const HomeSection = styled.div`
    background-size: cover;  
    width: 100%;
    display: block;
    height: 1000px;
`;

const DarkBox = styled.div`
    background: url("https://file-utocriqbzb.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 370px;
    display: block;

    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
	word-spacing: .25em;
    font-weight: 600;
    font-size: 26px;
    text-align: center;
    
    padding-top: 8%;
    margin-top: 0%;
    right:0%;
    margin-left: 0%;
    left:0%;

`;

const SignInSection = styled.div`
    text-align: center;
`;
const SignInButton = styled.div`
    background-color: #C04448;
    color: #ffffff;
    height: 50px;
    width: 100px;
    padding: 12px 20px;
    margin: 10px 10px;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    vertical-align: middle;
`;
const LogoRow = styled.div`
    padding-top: 20px;
`;

const SignUpIcon = styled.div`
    background: url("https://file-qxkdsrlkid.now.sh/");
    width: 200px;
    height: 190px;
    position: relative;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 15%;
    margin-bottom: 7%;
`;

const LearningIcon = styled.div`
    background: url("https://file-xpcekvtwpe.now.sh/");
    width: 200px;
    height: 190px;
    position: relative;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 15%;
    margin-bottom: 7%;

`;

const AcheiveIcon = styled.div`
    background: url("https://file-ejpeoycfqy.now.sh/");
    width: 200px;
    height: 190px;
    position: relative;
    display: block;
    background-size: cover;  
    margin: 0 auto;
    margin-top: 15%;
    margin-bottom: 7%;
`;

const TopBox = styled.div`
    background: url("https://file-unocxsjgra.now.sh");
    background-size: cover;  
    width: 100%;
    height: 300px;

    border-right: .5px solid #c4c4c4;

`;
const BottomBox = styled.div`
    background: url("https://file-rfipjzwojd.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;

    border-left: .5px solid #c4c4c4;

`;

const RightBox = styled.div`
    background-color: #9e0c24;
    width: 100%;
    height: 300px;
    position: relative;

    border-bottom: .5px solid #c4c4c4;

`;

const LeftBox = styled.div`
    background-color: #9e0c24;
    width: 100%;
    height: 300px;
    position: relative;

    border-top: .5px solid #c4c4c4;

`;

const BoxText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: right;
    position: relative;
    font-family: 'Lato', sans-serif;
    color: white;

    margin-right: 10%;
`;
const BoxRightText = styled.div`
    font-weight: 200;
    font-size: 26px;
	text-align: left;
    position: relative;
    font-family: 'Lato', sans-serif;
    color: white;
    left: 10%;
`;
const BoxRightSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
    text-align: left;
    position: relative;
    font-family: 'Lato', sans-serif;
    color: white;
    left: 10%;
    margin-right: 20%;
`;

const BoxSubText = styled.div`
    font-weight: 100;
    font-size: 16px;
	text-align: right;
    position: relative;
    font-family: 'Lato', sans-serif;
    color: white;
    margin-right: 10%;
`;

const noGutter = {
    padding: 0,
    margin: 0,
};

class HomePage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            signup: false,
        };
    }
    onSignUp = (e) => {
        this.setState({
            signup: true,
        });
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                        query HomePage_Query{
                            students {
                                id
                                ...studentListItem_student
                            }
                        }   
                    `}
                variables={{}}
                render={({ props }) => (
                    <div >
                        <head>
                            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
                        </head>
                        <HomeSection className="container" className="homePic">
                            <div className="container-fluid">
                                <div className="row">
                                    <SignInSection>
                                        {
                                            this.state.signup ?
                                                <div>
                                                    <p>Are you a...</p>
                                                    <SignInButton className="btn">Student</SignInButton>
                                                    <SignInButton className="btn">Teacher</SignInButton>
                                                    <SignInButton className="btn">Admin</SignInButton>
                                                </div>
                                                :
                                                <DarkBox>The Learning Tool Mission
                                                <br />______
                                                <div className="lower"> Our goal is to prepare students for their future </div>
                                                <Login />
                                                <SignInButton className="lower" className="btn" onClick={this.onSignUp}>Sign Up</SignInButton>
                                                </DarkBox>
                                        }
                                    </SignInSection>
                                </div>


                                                                <div className="padded">
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <SignUpIcon />
                                            <div className="caption">
                                            Sign up for an account
                                            </div>
                                            <br />
                                            <div className="subCaption">
                                            Students can sign up for an account and will be paired with a tutor
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <LearningIcon />
                                            <div className="caption">
                                            Start learning
                                            </div>
                                            <br />
                                            <div className="subCaption">
                                            Tutors will go over lessons with you and supplement your lessons with worksheets and quizzes
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <AcheiveIcon />
                                            <div className="caption">
                                        Get the results
                                            </div>
                                            <br />
                                            <div className="subCaption">
                                            These lessons are to prepare students for high acheivement in national exams
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div
className="col-12 col-sm-6"
                                        style={noGutter}
                                    >
                                        <div className="no-gutter">
                                            <TopBox />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6" style={noGutter}>
                                        <div className="no-gutter">
                                            <RightBox>
                                                <br />
                                                <br />
                                                <BoxText>
                                                    Learn From Anywhere
                                                </BoxText>
                                                <br />
                                                <BoxText> ________</BoxText>
                                                <br />
                                                <br />
                                                <BoxSubText>
                                                    Lessons are accessible from many different devices
                                                </BoxSubText>
                                            </RightBox>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6" style={noGutter}>
                                        <LeftBox>
                                            <br />
                                            <br />
                                            <BoxRightText>
                                                    Our Product is Dope as Hell
                                            </BoxRightText>
                                            <br />
                                            <BoxRightText> ________</BoxRightText>
                                            <br />
                                            <br />
                                            <BoxRightSubText>
                                                    Use our product because we are dope as hell and this product will improve ur life by like 300%
                                            </BoxRightSubText>
                                        </LeftBox>
                                    </div>
                                    <div className="col-12 col-sm-6" style={noGutter}>
                                        <BottomBox />
                                    </div>
                                </div>


                            </div>
                        </HomeSection>
                        <div className="hidden" >Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    </div>
                )}
            />
        );
    }
}

export default HomePage;

import React from 'react';
import styled from 'styled-components';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import StyledButton from '../components/button';
import environment from '../relay/environment';
import SignIn from '../components/signin';
import Footer from '../components/footer';

import { getFileInfo, setPermissionToAllRead, copyFile, setPermissionToAllEdit, InitialStudentSetup } from '../Gapi';

type Props = {
    /**/
}
const HomeSection = styled.div`
    background-size: cover;  
    display: block;
    height: 1000px;
`;

const SignInSection = styled.div`
    text-align: center;
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
    `;
    // border-right: /z.5px solid #c4c4c4;
const BottomBox = styled.div`
    background: url("https://file-rfipjzwojd.now.sh/");
    background-size: cover;  
    width: 100%;
    height: 300px;
    position: relative;
    margin-right: 0%;
    `;
    // border-left: .5px solid #c4c4c4;

const RightBox = styled.div`
    background-color: #9e0c24;
    width: 100%;
    height: 300px;
    position: relative;
    `;
    // border-bottom: .5px solid #c4c4c4;

const LeftBox = styled.div`
    background-color: #9e0c24;
    width: 100%;
    height: 300px;
    position: relative;
    `;
    // border-top: .5px solid #c4c4c4;

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
            loginOrSignup: false,
            role: '',
        };
    }
    onSignUp = (e) => {
        this.setState({
            loginOrSignup: 'register',
        });
    }
    onLogin = (e) => {
        this.setState({
            loginOrSignup: 'login',
        });
    }
    setup = (e) => {
        // this function is used to easily call the google drive setup function
        // this should be called once auth is setup for a newly registered student
        InitialStudentSetup(environment, 'hi');
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
                        <HomeSection className="container-fluid" >
                            <div className="row">
                                <SignInSection>
                                    {
                                        <div className="dark-box">Our Mission
                                            <br />______
                                            <div className="lower">Empowering students to become fluent in English and to excel in their studies</div>
                                            { ((this.props.location.state == undefined || this.props.location.state.signedIn) && (this.state.loginOrSignup === 'register' || this.state.loginOrSignup === 'login')) ?
                                                <div className="sign-in-btn-box">
                                                    <p>Are you a...</p>
                                                    <SignIn role="student" requestType={this.state.loginOrSignup} />

                                                    <SignIn role="teacher" requestType={this.state.loginOrSignup} />

                                                    {this.state.loginOrSignup === 'login' && <SignIn role="admin" requestType={this.state.loginOrSignup} />}

                                                </div>
                                                :
                                                <div className="sign-in-btn-box">
                                                    <button className="sign-in-btn btn" onClick={this.onLogin}>Login</button>
                                                    <button className="sign-in-btn btn" onClick={this.onSignUp}>Sign up</button>
                                                </div>
                                            }
                                        </div>
                                    }
                                </SignInSection>
                            </div>
                            <div className="padded">
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <SignUpIcon />
                                        <div className="caption">
                                        Hands-On Learning
                                        </div>
                                        <br />
                                        <div className="subCaption">
                                        Create an account to begin studying and practicing your language skills
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <LearningIcon />
                                        <div className="caption">
                                        Tailored Curriculum
                                        </div>
                                        <br />
                                        <div className="subCaption">
                                        Lessons are designed specifically for Cambodian exam preparation
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <AcheiveIcon />
                                        <div className="caption">
                                        Dedicated Tutors
                                        </div>
                                        <br />
                                        <div className="subCaption">
                                        Connect with your personal tutor to amplify your learning
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
                                            Flexible Learning
                                            </BoxText>
                                            <br />
                                            <BoxText> ________</BoxText>
                                            <br />
                                            <br />
                                            <BoxSubText>
                                            Access your lessons, worksheets, and quizzes anywhere and anytime you're connected to the Internet
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
                                        Real-Time Support
                                        </BoxRightText>
                                        <br />
                                        <BoxRightText> ________</BoxRightText>
                                        <br />
                                        <br />
                                        <BoxRightSubText>
                                        Tutors provide rapid, individual feedback on your work and can answer questions or help with editing
                                        </BoxRightSubText>
                                    </LeftBox>
                                </div>
                                <div className="col-12 col-sm-6" style={noGutter}>
                                    <BottomBox />
                                </div>
                            </div>
                        </HomeSection>
                    </div>
                )}
            />
        );
    }
}

export default HomePage;

import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import type { Environment } from 'relay-runtime';


import LessonForm from './../components/lessonform';
import LessonList from './../components/lessonList';
import AdminListComponent from './../components/adminList';
import environment from '../relay/environment';

import './../../assets/Hover.css';


const ToolBar = styled.div`

background: rgba(30,209,179,1);
background: -moz-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(30,209,179,1)), color-stop(100%, rgba(3,114,145,1)));
background: -webkit-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
background: -o-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
background: -ms-linear-gradient(left, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
background: linear-gradient(to right, rgba(30,209,179,1) 0%, rgba(3,114,145,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1ed1b3', endColorstr='#037291', GradientType=1 );

    width: 70%;
    height: auto;
    position: relative;
    background-size: cover;  
    margin: auto;

    display: block;
    overflow: auto;

    padding-bottom: 10px;

    margin-bottom: 5%;
    text-align: center;
`;

const PaddedButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    display: inline;
    background-color: transparent;
    border-color: white;
    margin-right: 10px;
    margin-left: 10px;
`;

type Props = {
    /**/
  }

class AdminPage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            showLesson: false,
        };
    }
    goToQuiz = () => { this.props.history.push('/quiz'); }
    goToLessonForm = () => { this.setState({ showLesson: true }); }
    goToList = () => { this.setState({ showLesson: false }); }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2 className="TopTextHeader"> Administrator Tool Page </h2>
                    <h5 className="TopText"> Administrators have the ability to keep track of all of the students and teachers, and create Quizzes and lessons.  </h5>
                    <ToolBar>
                        <div className="adminTool">
                            <PaddedButton className="btn btn-default" onClick={this.goToLessonForm}>Edit Lessons</PaddedButton>
                        </div>
                        <div className="adminTool">
                            <PaddedButton className="btn btn-default" onClick={this.goToList}>View Tutors and Students</PaddedButton>
                        </div>
                    </ToolBar>
                </div>
                <br />
                <div className="row rightMargin">
                    <div className="col-sm-8">
                        {
                            this.state.showLesson ?
                                <div className="centered">
                                    <LessonForm />
                                    <LessonList />
                                </div>
                                :
                                <AdminListComponent />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;

import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import environment from './../relay/environment';
import assignStudentToTeacher from './../relay/mutations/assignStudentToTeacher';
import deleteStudent from './../relay/mutations/deleteStudent';
import deleteTeacher from './../relay/mutations/deleteTeacher';
import { withRouter } from 'react-router-dom';

import StudentListItem from './../components/studentListItem';
import TeacherListItem from './../components/teacherListItem';
import PaddedButton from './../components/button';

import './../../assets/Hover.css';

type Props = {
  /**/
}

export const EvenElem = styled.div`
  background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
`;
export const OddElem = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
    
`;

export const DeleteButton = styled.button`
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 50%;
    margin-bottom:10px;
    margin-top: 2%;
    display: inline;
`;

export const AssignButton = styled.button`
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 5px;
    display: inline;
`;

export const AssignTeacherButton = styled.button`
    color: white;
    font-size: 12px;
    padding: 10px;
    padding-left: 10px;
    margin-left: 5px;
    padding-right: 25px;
`;

export const PopUpList = styled.div`
    position: fixed;
    background-color: white;
    left: 80%;
    top:40%;
`;

export const TeacherElem = styled.div`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 10px;
    padding-left: 0px;
    margin-left: 5px;
    padding-right: 25px;
`;

const student = 'STUDENT';
const tutor = 'TUTOR';
class AdminListComponent extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            studentOrTutor: 'STUDENT',
            showAssignList: false,
            selectedTeacherId: '',
            filterText: '',
        };
    }


    onClickMake = (e) => {
        this.setState({
            studentOrTutor: e.target.name,
        });
    }

    onClickShowAssignList = (e) => {
        if (this.state.showAssignList === true) {
            this.setState({
                showAssignList: false,
            }, () => {
            });
        } else {
            this.setState({
                showAssignList: true,
                selectedStudentId: e.target.name,
            }, () => {
            });
        }
    }

    assignStudentToTeachers = (e) => {
        this.setState({
            showAssignList: false,
        }, function () {
            const studentID = this.state.selectedStudentId;
            const teacherID = this.state.selectedTeacherId;
            assignStudentToTeacher(environment, studentID, teacherID);
        });
    }

    onClickDeleteStudent = (e) => {
        const deleteStudentId = e.target.name;
        deleteStudent(environment, deleteStudentId);
        window.location.reload();
    }

    onClickDeleteTeacher = (e) => {
        const deleteTeacherId = e.target.name;
        deleteTeacher(environment, deleteTeacherId);
        window.location.reload();
    }
    handleFilter = (e) => {
        this.setState({
            filterText: e.target.value,
        });
    }

    getList(props) {
        return (
            <div>
                <div className="container-fluid">
                    <div className="col-md-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">{ this.state.studentOrTutor === 'TEACHER' ? 'Teacher' : 'Student' }</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.studentOrTutor === 'TEACHER' ?
                                    props.teachers !== null ?
                                        props.teachers.filter(elem => elem.name.toLowerCase().includes(this.state.filterText.toLowerCase())).map((teacher, idx) => (
                                            <tr key={idx}>
                                                <th scrope="row">{idx + 1}</th>
                                                <th>
                                                    <Link key={idx} style={{ display: 'block' }}to={{ pathname: '/teacher', state: { teacher } }}>
                                                        <button className="btn btn-default">{teacher.name}</button>
                                                    </Link>
                                                </th>
                                                <th>
                                                    <DeleteButton className="btn btn-danger" name={teacher.id} onClick={this.onClickDeleteTeacher} > Delete </DeleteButton>
                                                </th>
                                            </tr>
                                        ))
                                        :
                                        <p>No Teachers</p>
                                    :
                                    props.students !== null ?
                                        props.students.filter(elem => elem.name.toLowerCase().includes(this.state.filterText.toLowerCase())).map((s, idx) => (
                                            <tr key={idx}>
                                                <th scrope="row">{idx + 1}</th>
                                                <th>
                                                    <Link key={idx} style={{ display: 'block' }} to={{ pathname: '/student', state: { student: s } }}>
                                                        <button className="btn btn-default">{s.name}</button>
                                                    </Link>
                                                </th>
                                                <th>
                                                    <DeleteButton className="btn btn-danger" name={s.id} onClick={this.onClickDeleteStudent} > Delete </DeleteButton>
                                                </th>
                                                <th>
                                                    <AssignButton className="btn btn-info" name={s.id} onClick={this.onClickShowAssignList} > Assign </AssignButton>
                                                </th>
                                            </tr>
                                        ))
                                        :
                                        <p>No Students</p>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    handleInputChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const id = target.value;
        this.setState({
            selectedTeacherId: id,
        }, () => {
        });
    }

    getPopList(props, showList) {
        if (showList === true) {
            return (
                <PopUpList>

                    {
                        props.teachers.map((teacher, i) => (
                            <div key={i}>
                                <hr style={{ margin: '5px' }} />
                                <ul id={teacher.id} >
                                    <input name="teacher" type="radio" value={teacher.id} onChange={this.handleInputChange} />  {teacher.name}
                                </ul>
                            </div>))

                    }
                    <AssignTeacherButton className="btn btn-info" onClick={this.assignStudentToTeachers}> Assign to Teacher </AssignTeacherButton>
                </PopUpList>
            );
        }
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                      query adminList_Query{
                          students {
                              id
                              name
                              ...studentListItem_student
                          }
                          teachers {
                              name
                              id
                              ...teacherListItem_teacher
                          }
                      }
                  `}

                variables={{}}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }

                    return (
                        <div className="rightMargin" >
                            <div>
                                <h2> Viewing { this.state.studentOrTutor == student ? 'list of students' : 'list of teachers'}</h2>
                                <div className="form-inline">
                                    <PaddedButton className={this.state.studentOrTutor == student ? 'btn btn-primary' : 'btn btn-default'} name="STUDENT" onClick={this.onClickMake}> Students </PaddedButton>
                                    <PaddedButton className={this.state.studentOrTutor == student ? 'btn btn-default' : 'btn btn-primary'} name="TEACHER" onClick={this.onClickMake}> Teachers </PaddedButton>
                                    <input className="form-control" type="text" name="filter-users" value={this.state.filterText} onChange={this.handleFilter} placeholder="Filter" />
                                </div>
                                <div> {this.getList(props)} </div>
                                <div> {this.getPopList(props, this.state.showAssignList)}</div>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}


export default AdminListComponent;

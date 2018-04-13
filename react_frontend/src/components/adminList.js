import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navBar';

import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { graphql, QueryRenderer, commitMutation } from 'react-relay';
import type { Environment } from 'relay-runtime';

import environment from './../relay/environment';
import assignStudentToTeacher from './../relay/mutations/assignStudentToTeacher'
import deleteStudent from './../relay/mutations/deleteStudent'
import deleteTeacher from './../relay/mutations/deleteTeacher'
import { withRouter } from 'react-router-dom';

import StudentListItem from './../components/studentListItem'
import TeacherListItem from './../components/teacherListItem'

type Props = {
  /**/
}

export const EvenElem = styled.div`
  background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
    width: 50%;
`;
export const OddElem = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    padding-left: 30px;
    margin-left:20px;
    width: 50%;
`;

export const ChangeButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 20px;
    margin: 20px;
`;

export const DeleteButton = styled.button`
    background-color: red;
    border: 1px solid #ddd;
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 50%;
`;

export const AssignButton = styled.button`
    background-color: blue;
    border: 1px solid #ddd;
    padding: 8px;
    color: white;
    font-size: 12px;
    margin-left: 5px;
`;

export const AssignTeacherButton = styled.button`
    background-color: blue;
    border: 1px solid #ddd;
    color: white;
    font-size: 12px;
    border: 1px solid #ddd;
    padding: 10px;
    padding-left: 10px;
    margin-left: 5px;
    padding-right: 25px;
`;

export const PopUpList = styled.div`
    position: fixed;
    background-color: white;
    left: 80%;
    top:50%;
`;

export const TeacherElem = styled.div`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 10px;
    padding-left: 0px;
    margin-left: 5px;
    padding-right: 25px;
`;

let student = "STUDENT"
let tutor = "TUTOR"
class AdminListComponent extends React.Component<Props>{    constructor(props){
        super(props)
        this.state = {
          studentOrTutor: tutor,
          showAssignList: false,
          selectedTeacherId: ''
        }
    }

    handleInputChange= (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      const id = target.value;
      this.setState({
        selectedTeacherId: id
      }, function () {
      });
    }

    onClickMake = (e) => {
      this.setState({
        studentOrTutor: e.target.name
      })
    }

    onClickShowAssignList = (e) => {
      if(this.state.showAssignList === true){
        this.setState({
            showAssignList: false
        }, function () {
        });
      }else{
        this.setState({
          showAssignList:true,
          selectedStudentId: e.target.name
        }, function () {
        });
      }
    }

    assignStudentToTeachers = (e) => {
        this.setState({
            showAssignList: false
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

    EvenOddElem(elem, index, isTeacher, student) {
      if(isTeacher === true){
        if(index % 2 === 0){
          return <EvenElem> {elem} <DeleteButton name={student.id} onClick = {this.onClickDeleteTeacher}> Delete </DeleteButton>  </EvenElem>
        }
        return <OddElem> {elem} <DeleteButton name={student.id} onClick = {this.onClickDeleteTeacher}> Delete </DeleteButton>  </OddElem>
      }
      if(index % 2 === 0){
        return <EvenElem> {elem} <DeleteButton name={student.id} onClick = {this.onClickDeleteStudent} > Delete </DeleteButton> <AssignButton name={student.id} onClick = {this.onClickShowAssignList} > Assign </AssignButton>  </EvenElem>
      }
      return <OddElem> {elem} <DeleteButton name={student.id} onClick = {this.onClickDeleteStudent} > Delete </DeleteButton> <AssignButton name={student.id} onClick = {this.onClickShowAssignList} > Assign </AssignButton> </OddElem>
    }

    getList(props, showStudentorTutor) {
        if (showStudentorTutor === student){
            return(
               <div>{props.students.map( (student, index) =>  this.EvenOddElem(<StudentListItem key={student.id} student={student} />, index, false, student) )} </div>
            )
        }
        else{
            return(
              <div>{props.teachers.map( (teacher, index) => this.EvenOddElem(<TeacherListItem key={teacher.id} teacher={teacher} />, index, true, teacher)  )} </div>
            )
        }
    }

    getPopList(props, showList) {
        if (showList === true){
            return(
              <PopUpList>{props.teachers.map((teacher) => <TeacherElem><ul id={teacher.id} > <input type="checkbox" value={teacher.id} onChange={this.handleInputChange}/>  {teacher.name} </ul></TeacherElem>)}
               <AssignTeacherButton onClick={this.assignStudentToTeachers}> Assign to Teacher </AssignTeacherButton></PopUpList>
          )
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
                      const teacherList = props.teachers.map((teacher) => <TeacherElem><ul id={teacher.id} > <input type="checkbox" value={teacher.id} onChange={this.handleInputChange}/>  {teacher.name} </ul></TeacherElem>)

                      return (
                          <div>
                              I am an admin
                                  <button onClick = {this.gotoQuiz}>Create Quiz</button>
                                <div>
                                <h2> View Tutors or Students</h2>
                                <ChangeButton name="STUDENT" onClick={this.onClickMake}> Students </ChangeButton>
                                <ChangeButton name="TEACHER" onClick={this.onClickMake}> Tutors </ChangeButton>
                                <div> {this.getList(props, this.state.studentOrTutor)} </div>
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

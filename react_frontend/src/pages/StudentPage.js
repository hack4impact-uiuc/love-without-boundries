import React from 'react';
import LessonComponent from './../components/lesson';
import NavBar from '../components/navBar';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import environment from '../relay/environment';

type Props = {
    /**/ 
  }

class StudentPage extends React.Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            defaultTitle: "My Lessons"
        }
    }
    setTitle = () => {
        if (this.props.studentName) {
            this.setState({
                defaultTitle: this.props.studentName + "'s Lessons"
            }
            )
        }
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query StudentPage_Query{
                        lessons{
                            name
                            quiz
                            worksheetName
                            worksheetURL
                            notesName
                            notesURL
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
                            <div>
                                <NavBar />
                                {this.setTitle()}
                                <h2>{this.state.defaultTitle}</h2>
                                {
                                props.lessons.map(lesson => (
                                    <LessonComponent id={lesson.id} lessonName={lesson.name} lessonNotes={lesson.notesName} lessonNotesLink={lesson.notesURL} lessonWorksheetLink={lesson.worksheetURL} worksheetName={lesson.worksheetName} quizName={lesson.quiz} quizPercentage={"50%"} quizIsChecked={false}/>
                                ))
                                }
                            </div>
                    );
                }}
            />
        )
    }
}
    


export default withRouter(StudentPage);
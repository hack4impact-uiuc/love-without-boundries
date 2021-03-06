import React from 'react';
import environment from '../relay/environment';
import { setPermissionToAllRead, setPermissionToAllEdit, getIdFromUrl } from '../Gapi';
import addLesson, { mutation as addLessonMutation } from '../relay/mutations/addLesson';
import './../../assets/Hover.css';


class AdminLessonForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            notes_link: '',
            wksht_link: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitLesson = (e) => {
        e.preventDefault();
        const NotesFileID = getIdFromUrl(this.state.notes_link);
        const WkshtFileID = getIdFromUrl(this.state.wksht_link);
        if (!NotesFileID || !WkshtFileID) {
            alert('Please Insert Notes Link and Worksheet Link');
        }
        setPermissionToAllRead(NotesFileID[0]);
        setPermissionToAllEdit(WkshtFileID[0]);
        addLesson(environment, this.state.name, this.state.wksht_link, this.state.notes_link);
        this.setState({
            name: '',
            notes_link: '',
            wksht_link: '',
        });
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form className="gradColor">
                    <h2>Add Lesson:</h2>
                    <div className="form-group">
                        <label htmlFor="lesson_name_input">Lesson Name: </label>
                        <input className="form-control" id="lesson_name_input" name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Enter Lesson Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lesson_notes_link_input">Lesson Notes Link: </label>
                        <input className="form-control" id="lesson_notes_link_input" name="notes_link" value={this.state.notes_link} onChange={this.handleChange} placeholder="Enter Notes File Link" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lesson_wksht_link_input">Lesson Worksheet Link: </label>
                        <input className="form-control" id="lesson_wksht_link_input" name="wksht_link" value={this.state.wksht_link} onChange={this.handleChange} placeholder="Enter Worksheet File Link" />
                    </div>
                    <p style={{ color: '#d41137' }}> Please make sure that Notes & Worksheet File is viewable to everyone with the link ("View" for "Anyone with the link") and is in the Shared Google Drive Folder</p>

                    <button className="btn btn-primary" onClick={this.submitLesson}>Add Lesson</button>
                </form>
                <div />
            </div>
        );
    }
}

export default AdminLessonForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addURL from '../relay/mutations/addURL';
import { addFile, copyFile } from '../Gapi';
import environment from '../relay/environment';
import PaddedButton from './button';
import jwtDecode from 'jwt-decode';

class googleDocButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
        };
    }
    componentDidMount() {
        if (this.state.url) {
            return;
        }
        const token = jwtDecode(sessionStorage.getItem('token'));
        if (token === null || !token || token.userType !== 'student') {
            return;
        }
        // Need to get userId
        copyFile('1CLU5eNONV-KbqEQ8Y2dzlO_T45bLnMOO2-b0MR6nk10').then((res) => {
            if (res == undefined || res.error) {
                // return;
                throw Error('Insufficient Priviledges, please contact Admin');
            }
            if (this.props.location == undefined) {
                alert('Insufficient priviledges, contact Admin');
            }
            addURL(environment, this.props.location.state.student.id, `https://docs.google.com/document/d/${res.id}/edit`);
            this.setState({
                url: `https://docs.google.com/document/d/${res.id}/edit`,
            });
        }).catch(err => console.error(err.message));
    }
    render() {
        return (
            <div>
                <a href={this.state.url}>
                    <PaddedButton type="button" className="btn btn-info">Google Docs Playground</PaddedButton>
                </a>
            </div>
        );
    }
}

export default googleDocButton;


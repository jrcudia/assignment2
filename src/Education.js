import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className="education">
                <div class="education-item1">
                    <h3>Education</h3>
                </div>
                <div class="education-item2">
                    <div class="school1">
                        <h4>{this.props.school1.name}</h4>
                        <p>{this.props.school1.degree}</p>
                        <p>{this.props.school1.startDate} - {this.props.school1.endDate}</p>
                        <p>GPA: {this.props.school1.gpa}</p>
                    </div>
                    <div class="school2">
                        <h4>{this.props.school2.name}</h4>
                        <p>{this.props.school2.degree}</p>
                        <p>{this.props.school2.startDate} - {this.props.school2.endDate}</p>
                        <p>GPA: {this.props.school2.gpa}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
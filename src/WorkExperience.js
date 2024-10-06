import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
        return (
            <div className="work-experience">
                <div class="work-experience-item1">
                    <h3>Work Experience</h3>
                </div>
                <div class="work-experience-item2">
                    <div class="job1">
                        <h4>{this.props.job1.title} at {this.props.job1.company} ({this.props.job1.startDate} - {this.props.job1.endDate})</h4>
                        <p>{this.props.job1.description}</p>
                    </div>
                    <div class="job2">
                        <h4>{this.props.job2.title} at {this.props.job2.company} ({this.props.job2.startDate} - {this.props.job2.endDate})</h4>
                        <p>{this.props.job2.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;
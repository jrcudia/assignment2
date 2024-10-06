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
                        <h4>New Jersey Institute of Technology</h4>
                        <p>BS in Computer Science</p>
                        <p>2018 - 2022</p>
                        <p>GPA: 3.9</p>
                    </div>
                    <div class="school2">
                        <h4>New Jersey Institute of Technology</h4>
                        <p>MS in Data Science</p>
                        <p>2022 - 2023</p>
                        <p>GPA: 4.0</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
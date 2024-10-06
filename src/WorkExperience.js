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
                        <h4>Job Title at Company (August 2022 - December 2023)</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="job2">
                        <h4>Job Title 2 at Company 2 (August 2020 - December 2021)</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;
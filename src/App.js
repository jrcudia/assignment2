import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc@github.io/abc",
        mobile: "01234567890"
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.`,
      job1: {
        title: "Job Title",
        company: "Company",
        startDate: "August 2022",
        endDate: "December 2023",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.`
      },
      job2: {
        title: "Job Title 2",
        company: "Company 2",
        startDate: "August 2020",
        endDate: "December 2021",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.`
      },
      skills: ["A Key Skill 1", "A Key Skill 2", "A Key Skill 3", "A Key Skill 4", "A Key Skill 5", 
        "A Key Skill 6", "A Key Skill 7", "A Key Skill 8", "A Key Skill 9"
      ],
      school1: {
        name: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        startDate: "2018",
        endDate: "2022",
        gpa: "3.9"
      },
      school2: {
        name: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        startDate: "2022",
        endDate: "2023",
        gpa: "4.0"
      }
    }
  }
  
  render() {
    return (
      <div className="container">
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo} />
        <PersonalProfile description={this.state.description} />
        <WorkExperience job1={this.state.job1} job2={this.state.job2} />
        <Skills skills={this.state.skills} />
        <Education school1={this.state.school1} school2={this.state.school2} />
      </div>
    );
  }
}

export default App;
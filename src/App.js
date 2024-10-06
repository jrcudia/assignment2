import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PersonalProfile />
        <WorkExperience />
        <Skills />
        <Education />
      </div>
    );
  }
}

export default App;
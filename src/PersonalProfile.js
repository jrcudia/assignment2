import React, { Component } from 'react';

class PersonalProfile extends Component {
    render() {
        return (
            <div className="personal-profile">
                <div class="personal-profile-item1">
                    <h3>Personal Profile</h3>
                </div>
                <div class="personal-profile-item2">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default PersonalProfile;
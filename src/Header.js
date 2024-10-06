import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div class="header-item1">
                    <div>
                        <p class="name">{this.props.personInfo.name}</p>
                        <p class="occupation">{this.props.personInfo.occupation}</p>
                    </div>
                </div>
                <div class="header-item2">
                    <div>
                        <p>Email: <a href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a></p>
                        <p>Web: {this.props.contactInfo.web}</p>
                        <p>Mobile: {this.props.contactInfo.mobile}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const groupedSkills = this.props.skills.reduce((groupedSkills, skill, index) => {
            let groupIndex = Math.floor(index / 3);

            if (!groupedSkills[groupIndex]) {
                groupedSkills[groupIndex] = [];
            }

            groupedSkills[groupIndex].push(skill);

            return groupedSkills;
        }, []);

        return (
            <div className="key-skills">
                <div class="key-skills-item1">
                    <h3>Key Skills</h3>
                </div>
                <div class="key-skills-item2">
                    {
                        groupedSkills.map((group, groupIndex) => (
                            <div key={groupIndex}>
                                {group.map(skill => (
                                    <p>{skill}</p>
                                ))}
                            </div>
                        ))
                    }     
                </div>
            </div>
        );
    }
}

export default Skills;
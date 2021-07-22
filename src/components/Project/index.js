import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects() {
    const [projects] = useState([
        {
            name: "Workday Scheduler",
            description: "Schedule your day using this app.",
            tools: "HTML/CSS/JS"
        },
        {
            name: "README generator",
            description: "A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package (Links to an external site.)",
            tools: "Node.js, JavaScript"
        },
        {
            name: "My React Portfolio",
            description: "Professional portfolio created with React",
            tools: "React, node.js, JavaScript, HTML, CSS"
        }
    ]);
    return (
        <div>

        </div >
    );
}

export default Projects;
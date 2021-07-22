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
            <section id="projects">
                <div id="work" className="work-wrapper">
                    <div className="work-item work-title">
                        <h2>Work Projects</h2>
                    </div>
                    <div>

                        <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                        <h4>{projects[0].description}</h4>
                        <h5>{projects[0].tools}</h5>

                        <span>

                        </span>
                    </div>


                    <div >
                        <h3>{capitalizeFirstLetter(projects[2].name)}</h3>
                        <h4>{projects[2].description}</h4>
                        <h5>{projects[2].tools}</h5>

                        <span>

                        </span>
                    </div>

                    <div >
                        <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                        <h4>{projects[0].description}</h4>
                        <h5>{projects[0].tools}</h5>

                        <span>

                        </span>
                    </div>

                    <div >
                        <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                        <h4>{projects[0].description}</h4>
                        <h5>{projects[0].tools}</h5>

                        <span>

                        </span>
                    </div>

                    <div >
                        <h3>{capitalizeFirstLetter(projects[1].name)}</h3>
                        <h4>{projects[1].description}</h4>
                        <h5>{projects[1].tools}</h5>

                        <span>

                        </span>
                    </div>

                    <div >
                        <h3>{capitalizeFirstLetter(projects[1].name)}</h3>
                        <h4>{projects[1].description}</h4>
                        <h5>{projects[1].tools}</h5>

                        <span>

                        </span>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Projects;
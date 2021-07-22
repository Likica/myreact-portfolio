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
                    <div className="work-container">
                        <div className="wd-scheduler">
                            <div align="center" width="50%"></div>
                            <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                            <h4>{projects[0].description}</h4>
                            <h5>{projects[0].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project workday-scheduler">
                            </span>
                        </div>


                        <div className="myreact-portfolio">
                            <div align="center" width="50%"></div>
                            <h3>{capitalizeFirstLetter(projects[2].name)}</h3>
                            <h4>{projects[2].description}</h4>
                            <h5>{projects[2].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project myreact-portfolio">
                            </span>
                        </div>

                        <div className="wd-scheduler">
                            <div align="center" width="50%"></div>
                            <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                            <h4>{projects[0].description}</h4>
                            <h5>{projects[0].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project workday-scheduler">
                            </span>
                        </div>

                        <div className="wd-scheduler">
                            <div align="center" width="50%"></div>
                            <h3>{capitalizeFirstLetter(projects[0].name)}</h3>
                            <h4>{projects[0].description}</h4>
                            <h5>{projects[0].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project workday-scheduler">
                            </span>
                        </div>

                        <div className="readme-generator">
                            <div align="center" width="30%"></div>
                            <h3>{capitalizeFirstLetter(projects[1].name)}</h3>
                            <h4>{projects[1].description}</h4>
                            <h5>{projects[1].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project readme-generator">
                            </span>
                        </div>

                        <div className="readme-generator">
                            <div align="center" width="30%"></div>
                            <h3>{capitalizeFirstLetter(projects[1].name)}</h3>
                            <h4>{projects[1].description}</h4>
                            <h5>{projects[1].tools}</h5>

                            <span
                                // onClick="window.open
                                // ('https://likica.github.io/workday-scheduler/')"
                                // alt="Image Displaying the Workday Scheduler Landing Page" title="workday-scheduler"
                                // width="40%" style="cursor:pointer"
                                className="work-item-project readme-generator">
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </div >
    );
}

export default Projects;
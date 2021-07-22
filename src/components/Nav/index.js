import React from 'react';

function Nav() {


    return (
        <div className='nav-el'>
            <nav>
                <span>
                    <ul className="nav-effect">
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact-form">Contact Me</a>
                        </li>

                        <li>
                            <a href='#resume'
                            // onClick="window.open(https://www.linkedin.com/in/fahrija-w-92a4b8128)"
                            >Resume</a>
                        </li>
                    </ul>
                </span>
            </nav>

        </div>
    )
}

export default Nav;
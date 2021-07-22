import React from 'react';
import myPic from '../../assets/myPic/myPic.jpg';
function About() {
    return (
        <section>

            <div className='about-me' id='about-me'>
                <img src={myPic} className="my-2" style={{ width: "10%" }} alt="left" />
            </div>
            <h1 id="about">About Me</h1>
            <div className='about-me' id='about-me'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend.
        </p>
            </div>
        </section>
    );
}

export default About;
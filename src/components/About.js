import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const About = () => {
    return (
        <>
            <Tabs defaultActiveKey="facts">
                <Tab eventKey="facts" title="Facts">
                    <ol>
                        <li>Go to Privacy</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                    </ol>
                </Tab>

                <Tab eventKey="privacy" title="Privacy">
                    <ol>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Check this out</a></li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                    </ol>
                </Tab>

                <Tab eventKey="takedown" title="Takedown">
                    <ol>
                        <li>Nothing here, idiot!</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                    </ol>
                </Tab>
            </Tabs>
        </>
    );
}

export default About;

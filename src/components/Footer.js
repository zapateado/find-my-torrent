import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{width: "100%", height: "50px", backgroundColor: "rgb(50,60,65)", dispay:"flex", alignItems: "center", position: "fixed", bottom: "0px", paddingTop: "12px"}}>
            <Container>
                <span>
                    <strong style={{color: "white" }}> &copy; find my torrent</strong>
                    &nbsp;&nbsp;&nbsp;
                    {/* <Link to="/about">About</Link> */}
                </span>
            </Container>
        </footer>
    );
}

export default Footer;

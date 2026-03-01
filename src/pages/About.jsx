import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();
    const prev = ()=> navigate(-1);
    const next = ()=> navigate("/post");
    return (
        <div>
            <h1>About Us</h1>
            <nav>
                <Link to="">Teacher</Link> {" | "}
                <Link to="student">Student</Link>
                <hr />
            </nav>
            <div> <Outlet /> </div>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export default About;
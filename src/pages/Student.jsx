import React from 'react';

const Student = ({name, age, skills}) => {
    return (
        <div>
            <h1>Student Page</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Skills:
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
};

export default Student;
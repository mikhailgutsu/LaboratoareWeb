import React from 'react';
import './lab4.css';

interface User {
    name: string;
    email: string;
    age: number;
    address: string;
    isActive: boolean;
}

interface AdvancedUser extends User {
    education: string;
    skills: string[];
}

const user: AdvancedUser = {
    name: 'Gutu Mihai',
    email: 'mikhail.gutsu.2002@bsw-tech.com',
    age: 20,
    address: 'Chisinau 8',
    isActive: true,
    education: 'Intern C Embedded Developer from BMW',
    skills: ['AUTOSAR', 'C', 'C++'],
};

function Lab4() {
    return (
        <div className="container">
            <h1 className="title">Date Personale</h1>
            <div className="card">
                <p>
                    <span className="label">Name:</span>
                    <span className="value">{user.name}</span>
                </p>
                <p>
                    <span className="label">Email:</span>
                    <span className="value">{user.email}</span>
                </p>
                <p>
                    <span className="label">Age:</span>
                    <span className="value">{user.age}</span>
                </p>
                <p>
                    <span className="label">Address:</span>
                    <span className="value">{user.address}</span>
                </p>
                <p>
                    <span className="label">Active:</span>
                    <span className="value">{user.isActive.toString()}</span>
                </p>
                <p>
                    <span className="label">Education:</span>
                    <span className="value">{user.education}</span>
                </p>
                <p>
                    <span className="label">Skills:</span>
                    <span className="value">{user.skills.join(', ')}</span>
                </p>
            </div>
        </div>
    );
}

export default Lab4;

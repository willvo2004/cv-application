import { useState } from 'react';
import '../styles/ViewCV.css';

export default function ViewCV({ personalDetails }) {
    const [header, setHeader] = useState(personalDetails);

    const handleHeaderChange = (newValues) => {
        setHeader(prevHeader => ({
            ...prevHeader,
            ...newValues
        }));
    }
    
    return (
        <div className="cv-wrapper">
            <div className="cv-content">
                <h1 onChange={handleHeaderChange}>{personalDetails.fullName}</h1>
                <p onChange={handleHeaderChange}>{personalDetails.phoneNumber}</p>
                <p onChange={handleHeaderChange}>{personalDetails.emailAddress}</p>
                <p onChange={handleHeaderChange}>{personalDetails.homeAddress}</p>
            </div>
        </div>
    )
}
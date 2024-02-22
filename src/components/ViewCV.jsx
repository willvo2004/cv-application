import { useState } from 'react';
import '../styles/ViewCV.css';

export default function ViewCV({ personalDetails }) {
    return (
        <div className="cv-wrapper">
            <div className="cv-content">
                <h1>{personalDetails.fullName}</h1>
                <p>{personalDetails.phoneNumber}</p>
                <p>{personalDetails.email}</p>
                <p>{personalDetails.address}</p>
            </div>
        </div>
    )
}
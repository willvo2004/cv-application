import PersonalDetails from "./PersonalDetails";
import { useState } from 'react';

export default function Introduction() {
    const [submitted, setSubmitted] = useState(false);
    const [fullName, setFullName] = useState('');

    const handleSubmit = (fullName) => {
         // Call the onSubmit function with the fullName value
        setSubmitted(true);
        setFullName(fullName);
    }
    return (
        <div className="wrapper">
            {!submitted ? <PersonalDetails onSubmit={handleSubmit} /> : 
            <div className="content">
                <div className="content-text">Hello {fullName}!</div> 
            </div>}
        </div>
    )
}
import React, { useState } from 'react';

export default function AdditionalDetails({ onSubmit }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = () => {
        // Call the onSubmit function with the fullName value
        onSubmit(phoneNumber, email, address);
    };

    return (
        <div className='wrapper'>
            <div className="content">
                <div className="content-text">
                    Enter additional details.
                </div>
                <div className="content-input">
                    <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div className="content-input">
                    <input type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="content-input">
                    <input type="text" placeholder="Enter address" value={address} onChange={handleAddressChange} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

}


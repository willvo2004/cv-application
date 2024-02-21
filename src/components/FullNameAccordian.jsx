import React, { useState } from 'react';
import '../styles/PersonalDetailAccordian.css';

export default function PersonalDetailAccordion({ name, number, email, address }) {
    const [selected, setSelected] = useState(true);
    const [fullName, setFullName] = useState(name);
    const [phoneNumber, setPhoneNumber] = useState(number);
    const [emailAddress, setEmailAddress] = useState(email);
    const [homeAddress, setHomeAddress] = useState(address);

    const toggleAccordion = () => {
        setSelected(!selected);
    };

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailAddress(event.target.value);
    };

    const handleAddressChange = (event) => {
        setHomeAddress(event.target.value);
    };

    return (
        <div className='wrapper'>
            <div className="accordian">
                <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '400px'}}>
                    <h2 style={{ marginRight: '10px' }}>Personal Details</h2>
                    <span style={{ cursor: 'pointer' }} onClick={toggleAccordion}>{selected ? '-' : '+'}</span>
                </div>
                <div className="accordian-content" style={{ maxHeight: selected && '400px'}}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="First and last name" value={fullName} onChange={handleNameChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={handleNumberChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="emailAddress">Email</label>
                        <input type="text" id="emailAddress" name="emailAddress" placeholder="Enter email" value={emailAddress} onChange={handleEmailChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="homeAddress">Address</label>
                        <input type="text" id="homeAddress" name="homeAddress" placeholder="Enter address" value={homeAddress} onChange={handleAddressChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

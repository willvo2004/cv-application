import React, { useState } from 'react';
import '../styles/PersonalDetailAccordian.css';

export default function PersonalDetailAccordion({ name, number, email, address, onChange}) {
    const [selected, setSelected] = useState(true);
    const [formData, setFormData] = useState({ fullName: name, phoneNumber: number, emailAddress: email, homeAddress: address });

    const toggleAccordion = () => {
        setSelected(!selected);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        onChange({ ...formData, [name]: value });
    };

    return (
        <div className='wrapper'>
            <div className="accordian">
                <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '400px'}}>
                    <h2 style={{ marginRight: '10px' }}>Personal Details</h2>
                    <button style={{ cursor: 'pointer', width: '50px'}} onClick={toggleAccordion}>{selected ? '-' : '+'}</button>
                </div>
                <div className="accordian-content" style={{ maxHeight: selected && '400px'}}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="First and last name" value={formData.fullName} onChange={handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" value={formData.phoneNumber} onChange={handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="emailAddress">Email</label>
                        <input type="text" id="emailAddress" name="emailAddress" placeholder="Enter email" value={formData.emailAddress} onChange={handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="homeAddress">Address</label>
                        <input type="text" id="homeAddress" name="homeAddress" placeholder="Enter address" value={formData.homeAddress} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

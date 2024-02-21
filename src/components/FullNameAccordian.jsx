import { useState } from 'react';
import '../styles/PersonalDetailAccordian.css';

export default function PersonalDetailAccordion({ prefilledData }) {
    const [selected, setSelected] = useState(false);

    const toggleAccordion = () => {
        setSelected(!selected);
    };

    const handleChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <div className='wrapper'>
            <div className="accordian">
                <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '400px'}}>
                    <h2 style={{ marginRight: '10px' }}>Personal Details</h2>
                    <span style={{ cursor: 'pointer' }} onClick={toggleAccordion}>{selected ? '-' : '+'}</span>
                </div>
                {selected && (  
                    <div className="accordian-content">
                        <div className="input-container">
                            <label>Full Name</label>
                            <input type="text" placeholder="First and last name" value={prefilledData} onChange={handleChange}/>
                        </div>
                        <div className="input-container">
                            <label>Phone number</label>
                            <input type="text" placeholder="Enter phone number" />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" placeholder="Enter email" />
                        </div>
                        <div className="input-container">
                            <label>Address</label>
                            <input type="text" placeholder="Enter address" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
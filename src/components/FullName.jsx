import { useState } from 'react';

export default function FullName({ onSubmit }) {
    const [fullName, setFullName] = useState('');

    const handleChange = (event) => {
        setFullName(event.target.value);
    };

    const handleSubmit = () => {
        // Call the onSubmit function with the fullName value
        onSubmit(fullName);
    };

    return (
        <div className='wrapper'>
            <div className="content">
                <div className="content-text">
                    Start by entering your full name.
                </div>
                <div className="content-input">
                    <input type="text" placeholder="First and last name" value={fullName} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}
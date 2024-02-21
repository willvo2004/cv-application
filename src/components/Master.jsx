import { useState } from 'react';
import FullEditor from './FullEditor';
import FullName from './FullName';

export default function Master() {
    const [submitted, setSubmitted] = useState(false);
    const [fullName, setFullName] = useState('');

    const handleSubmit = (fullName) => {
        setSubmitted(true);
        setFullName(fullName);
    };

    return (
        <div>
            {!submitted ? (
                <FullName onSubmit={handleSubmit} /> // change this later 
            ) : (
                <FullEditor name={fullName}/>
            )}
        </div>
    );
}

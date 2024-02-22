import { useState } from 'react';
import FullEditor from './FullEditor';
import FullName from './FullName';
import AdditionalDetails from './AdditionalDetails';

export default function Master() {
    const [fullNameSubmitted, setFullNameSubmitted] = useState(false);
    const [additionalDetailsSubmitted, setAdditionalDetailsSubmitted] = useState(false);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleFullNameSubmit = (fullName) => {
        setFullNameSubmitted(true);
        setFullName(fullName);
    };

    const handleAdditionalDetailsSubmit = (phoneNumber, email, address) => {
        setAdditionalDetailsSubmitted(true);
        setPhoneNumber(phoneNumber);
        setEmail(email);
        setAddress(address);
    }

    const personalDetails = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        address: address
    }

    return (
        <div>
            {!fullNameSubmitted ? (
                <FullName onSubmit={handleFullNameSubmit} /> // change this later 
            ) : (
                fullNameSubmitted && !additionalDetailsSubmitted ? (
                    <AdditionalDetails onSubmit={handleAdditionalDetailsSubmit} />
                ) : (
                    <FullEditor header={personalDetails} />
                )
            )}
        </div>
    );
}

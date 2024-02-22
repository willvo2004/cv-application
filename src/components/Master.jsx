import { useState } from 'react';
import FullEditor from './FullEditor';
import FullName from './FullName';
import AdditionalDetails from './AdditionalDetails';

export default function Master() {
    const [fullNameSubmitted, setFullNameSubmitted] = useState(false);
    const [additionalDetailsSubmitted, setAdditionalDetailsSubmitted] = useState(false);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [homeAddress, setAddress] = useState('');

    const handleFullNameSubmit = (fullName) => {
        setFullNameSubmitted(true);
        setFullName(fullName);
    };

    const handleAdditionalDetailsSubmit = (phoneNumber, emailAddress, homeAddress) => {
        setAdditionalDetailsSubmitted(true);
        setPhoneNumber(phoneNumber);
        setEmail(emailAddress);
        setAddress(homeAddress);
    }

    const personalDetails = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        homeAddress: homeAddress
    }

    return (
        <div>
            {!fullNameSubmitted ? (
                <FullName onSubmit={handleFullNameSubmit} />
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

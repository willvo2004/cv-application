import FullNameAccordian from './FullNameAccordian';
import ViewCV from './ViewCV';
import '../styles/FullEditor.css';
import { useState } from 'react';
import EducationAccordian from './EducationAccordian';

export default function FullEditor({ header }) {
    const [stateHeader, setStateHeader] = useState(header);

    // Callback function to update stateHeader
    const handleAccordianChange = (newValues) => {
        setStateHeader(prevStateHeader => ({
            ...prevStateHeader,
            ...newValues
        }));
    }
    
    return (
        <div className="main">
            <div className="accordian-container">
                {/* Pass handleAccordianChange as a prop */}
                <FullNameAccordian onChange={handleAccordianChange} name={stateHeader.fullName} number={stateHeader.phoneNumber} email={stateHeader.emailAddress} address={stateHeader.homeAddress} />  
                <EducationAccordian /> 
            </div>
            <div className="cv-viewer">
                <ViewCV personalDetails={stateHeader}/>    
            </div>  
        </div>
    )
}

import FullNameAccordian from './FullNameAccordian';

export default function FullEditor({ name, phoneNumber, email, address}) {
    return (
        <>
            <FullNameAccordian name={name} number={phoneNumber} email={email} address={address}/>   
            <FullNameAccordian />
        </>
    )
}
import FullNameAccordian from './FullNameAccordian';

export default function FullEditor({ name }) {
    return (
        <>
            <FullNameAccordian prefilledData={name}/>   
            <FullNameAccordian />
        </>
    )
}
import React, { useState } from 'react';
import '../styles/EducationAccordian.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EducationAccordian() {
    const [selected, setSelected] = useState(false);
    const [addSchool, setAddSchool] = useState(false);
    const [schools, setSchools] = useState([]);

    const toggleAccordion = () => {
        setSelected(!selected);
    };

    const toggleAddSchool = () => {
        setAddSchool(!addSchool);
    };

    const addEducation = () => {
        // Get values from the form fields
        const schoolName = document.getElementById("schoolName").value;
        const degree = document.getElementById("degree").value;
        const startYear = document.getElementById("startYear").value;
        const endYear = document.getElementById("endYear").value;

        // Create a new school object
        const newSchool = { schoolName, degree, startYear, endYear };

        // Update the schools state with the new school
        setSchools(prevSchools => [...prevSchools, newSchool]);

        // Reset the form fields
        document.getElementById("schoolName").value = "";
        document.getElementById("degree").value = "";
        document.getElementById("startYear").value = "";
        document.getElementById("endYear").value = "";
        console.log(schools);

        // Close the add school form
        setAddSchool(false);
    };

    const removeEducation = (index) => {
        setSchools(prevSchools => prevSchools.filter((school, i) => i !== index));
    };
    
    if (addSchool) {
        return (
            <div className='wrapper'>
                <div className="accordian">
                    <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '400px'}}>
                        <h2 style={{ marginRight: '10px' }}>Education</h2>
                        <button style={{ cursor: 'pointer', width: '50px' }} onClick={toggleAccordion}>{selected ? '-' : '+'}</button>
                    </div>
                    <div className="accordian-content" style={{ maxHeight: selected && '400px'}}>
                        <h3>and you dont seem to understand</h3>
                        <div className="input-container-education">
                            <label htmlFor="schoolName">School Name</label>
                            <input type="text" id="schoolName" name="schoolName" placeholder="Enter school name"/>
                        </div>
                        <div className="input-container-education">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id="degree" name="degree" placeholder="Enter degree"/>
                        </div>
                        <div className="input-container-education">
                            <label htmlFor="startYear">Start Year</label>
                            <input type="text" id="startYear" name="startYear" placeholder="Enter start year"/>
                        </div>
                        <div className="input-container-education">
                            <label htmlFor="endYear">End Year</label>
                            <input type="text" id="endYear" name="endYear" placeholder="Enter end year"/>
                        </div>
                        <button onClick={toggleAddSchool}>Cancel</button>
                        <button onClick={addEducation}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
    
    else return (
        <div className='wrapper'>
            <div className="accordian">
                <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '400px'}}>
                    <h2 style={{ marginRight: '10px' }}>Education</h2>
                    <button style={{ cursor: 'pointer', width: '50px' }} onClick={toggleAccordion}>{selected ? '-' : '+'}</button>
                </div>
                <div className="accordian-content" style={{ maxHeight: selected && '400px'}}>
                    <div className="education-list" style= {{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '2rem'}}>
                        {schools.length > 0 && schools.map((school, index) => {
                            return (
                                <div key={index} className="school">
                                    <button onClick={toggleAddSchool}>{school.schoolName}</button>
                                    <IconButton style={{color: 'white'}} onClick={() => removeEducation(index)}><DeleteIcon /></IconButton>
                                </div>
                            )
                        })}
                    </div>
                    <div className="add-school" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                    <button style={{ cursor: 'pointer', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={toggleAddSchool}>{addSchool ? '-' : '+'}</button>
                        <h3 style={{ marginRight: '10px' }}>Education</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
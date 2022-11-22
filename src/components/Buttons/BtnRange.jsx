import React from 'react';
import Btn from './Btn';
import { useState } from 'react';

export const BtnRangePlus = () => {
    const [length, setLength] = useState(0);
    const OnclikIncremet = (e) => {
        e.preventDefault();
        setLength(length+1);
        
    }
    return (
        <Btn>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
        </Btn>
    )
}


export const BtnRangeMinus = () => {
    return (
        <Btn>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
            </svg>
        </Btn>
    )
}






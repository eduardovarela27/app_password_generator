import { useState } from "react";

export const ConfigState = (id) => {
    
    const [state, setState] = useState({
        length: 6,
        simbols: true,
        numbers: true,
        upperCase: true
    });

      

    const handleIncremet = () => {
        console.log("state.length");
        setState((oldState) => {
            const newConfig = {...oldState};
            newConfig.length +=1;
            return newConfig
        });
    
    }

    return {state, handleIncremet}

}



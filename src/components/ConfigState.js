import { useState } from "react";

export const ConfigState = () => {

    const [state, setState] = useState({
        length: 6,
        simbols: true,
        numbers: true,
        upperCase: true
    });



    const handleIncremet = () => {
        setState((oldState) => {
            const newConfig = { ...oldState };
            newConfig.length += 1;
            return newConfig
        });

    }

    const handleDecremet = () => {
        setState((oldState) => {
            const newConfig = { ...oldState };
            if (newConfig.length > 5) {
                newConfig.length -= 1;
            }
            return newConfig
        });
    }    

   
    const handleSimbols = () => {
        setState((oldState) => {
            const newConfig = { ...oldState };
            newConfig.simbols = !newConfig.simbols
            return newConfig
        });
    }

    const handleNumbers = () => {
        setState((oldState) => {
            const newConfig = { ...oldState };
            newConfig.numbers = !newConfig.numbers
        });
    }

    const handleUpper = () => {
        setState((oldState) => {
            const newConfig = { ...oldState };
            newConfig.upperCase = !newConfig.upperCase
            return newConfig
        });
    }

    return { state, handleIncremet, handleDecremet,handleSimbols, handleNumbers, handleUpper }

}



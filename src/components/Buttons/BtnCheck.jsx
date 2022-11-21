import React from 'react';
import styled from 'styled-components';

const BtnCheck = () => {
    return (
        <Btn>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
        </Btn>
    )
}

const Btn = styled.button`
    width: 100%;
    background: #684BFF;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    vertical-align: top;
    font-size: 18px;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background: #866FFD;
    }
    `;

export default BtnCheck;
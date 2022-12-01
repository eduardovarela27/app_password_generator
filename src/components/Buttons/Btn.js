import styled from "styled-components";

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

export const Btn_NotSelect = styled(Btn)`
    background: #33257E;
    &:hover {
        background: #33257E;
    }
`;


export default Btn;
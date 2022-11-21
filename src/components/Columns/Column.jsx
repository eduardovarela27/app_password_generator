import styled from "styled-components";

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;

    & > * {
        flex: 1;
    }

    span{
        line-height: 40px;
        background-color: #33257E;
    }

     
`;


export default Column;
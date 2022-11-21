import styled from "styled-components";

const Row = styled.div`
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    label{
        line-height: 40px;
        font-size: 20px;
        margin-left:0px;
        font-weight: bold;

    }
`;

export default Row;
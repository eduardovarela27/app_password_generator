import styled from "styled-components";

const Row = styled.div`
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    label{
        line-height: 40px;
        font-size: 18px;
        margin-left:0px;
    }
`;

export default Row;
import React from 'react';
import '../styles/Main.css';
import BtnCheck from './Buttons/BtnCheck';
import { BtnRangePlus, BtnRangeMinus } from './Buttons/BtnRange';
import Column from './Columns/Column';
import Row from './Row/Row';

const Main = () => {
    return (
        <div className="container">
            <h1>Random Password Generator</h1>
            <label>Customize your password</label>
            <form style={{ "margin-top": "30px" }} >
                <Row>
                    <label > Password Length: </label>
                    <Column>
                        <BtnRangePlus />
                        <span>0</span>
                        <BtnRangeMinus />
                    </Column>
                </Row>
                <Row>
                    <label > Simbols: </label>
                    <BtnCheck/>
                </Row>
                <Row>
                    <label > Simbols: </label>
                    <BtnCheck/>
                </Row>
                <Row>
                    <label > Numbers: </label>
                    <BtnCheck/>
                </Row>
                <Row>
                    <label > Upper: </label>
                    <BtnCheck/>
                </Row>
            </form>
        </div>
    );
}

export default Main;
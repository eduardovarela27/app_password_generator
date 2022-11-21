import React from 'react';
import '../styles/Main.css';
import Row from './Row/Row';
import Column from './Columns/Column';
import BtnCheck from './Buttons/BtnCheck';
import { BtnRangePlus, BtnRangeMinus } from './Buttons/BtnRange';
import { BtnGenerate } from './Buttons/BtnGenerate';

const Main = () => {
    return (
        <div className="container">
            <div className="title">
                <h1>Random Password Generator</h1>
                <label>Customize your password</label>
            </div>
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
                    <BtnCheck />
                </Row>

                <Row>
                    <label > Numbers: </label>
                    <BtnCheck />
                </Row>
                <Row>
                    <label > Uppercase: </label>
                    <BtnCheck />
                </Row>
                <Row>
                    <BtnGenerate name="Generate" />
                    <input type="text" />
                </Row>
            </form>
        </div>
    );
}

export default Main;
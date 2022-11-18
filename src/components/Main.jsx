import React from 'react';
import '../styles/Main.css';
import BtnRange from './Buttons/BtnRange';
import Row from './Row/Row';

const Main = () => {
    return (
        <div className="container">
            <h1>Random Password Generator</h1>
            <label>Customize your password</label>
            <form style={{"margin-top": "30px"}} >
                <Row>
                    <label > Password Length: </label>
                    <div className="">
                        <BtnRange/>
                        <span>0</span>
                        <BtnRange/>
                    </div>
                </Row>
            </form>
        </div>
    );
}

export default Main;
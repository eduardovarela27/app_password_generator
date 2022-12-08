import '../styles/Main.css';
import Row from './Row/Row';
import Column from './Columns/Column';
import BtnCheck from './Buttons/BtnCheck';
import { BtnRangePlus, BtnRangeMinus } from './Buttons/BtnRange';
import { BtnGenerate } from './Buttons/BtnGenerate';
import { ConfigState } from './ConfigState'
import { useEffect, useState } from 'react';
import generatePassword from './helpers/generatePassword';
import { BtnCopy } from './Buttons/BtnCopy';
import RowPass from './Row/RowPass';

const Main = () => {
    const { state, handleIncremet, handleDecremet, handleSimbols, handleNumbers, handleUpper } = ConfigState();
    const [password, setPassword] = useState(generatePassword(state));

    useEffect(() => {
        setPassword(generatePassword(state));
    }, [state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword(generatePassword(state));
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Random Password Generator</h1>
                <label>Customize your password</label>
            </div>
            <form onSubmit={handleSubmit} style={{ marginTop: "30px" }} >
                <Row>
                    <label > Password Length: </label>
                    <Column>
                        <BtnRangePlus click={handleIncremet} />
                        <span>{state.length}</span>
                        <BtnRangeMinus click={handleDecremet} />
                    </Column>
                </Row>
                <Row>
                    <label > Simbols: </label>
                    <BtnCheck click={handleSimbols} check={state.simbols} />
                </Row>

                <Row>
                    <label > Numbers: </label>
                    <BtnCheck click={handleNumbers} check={state.numbers} />
                </Row>
                <Row>
                    <label > Uppercase: </label>
                    <BtnCheck click={handleUpper} check={state.upperCase} />
                </Row>
                <RowPass>
                    <input type="text" readOnly={true} value={password} />
                    <BtnGenerate />
                    <BtnCopy password={password} />
                </RowPass>

                <div id="msg_copied" style={{display:'none'}}>
                    <span>Copied!</span>
                </div>

            </form>
        </div>
    );
}

export default Main;
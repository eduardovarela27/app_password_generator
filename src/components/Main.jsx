import '../styles/Main.css';
import Row from './Row/Row';
import Column from './Columns/Column';
import BtnCheck from './Buttons/BtnCheck';
import { BtnRangePlus, BtnRangeMinus } from './Buttons/BtnRange';
import { BtnGenerate } from './Buttons/BtnGenerate';
import {ConfigState} from './ConfigState'

const Main = () => {
    const {state, handleIncremet,handleDecremet,handleSimbols, handleNumbers, handleUpper} = ConfigState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="container">
            <div className="title">
                <h1>Random Password Generator</h1>
                <label>Customize your password</label>
            </div>
            <form onSubmit={handleSubmit} style={{ "margin-top": "30px" }} >
                <Row>
                    <label > Password Length: </label>
                    <Column>
                        <BtnRangePlus click = {handleIncremet} />
                        <span>{state.length}</span>
                        <BtnRangeMinus click = {handleDecremet}/>
                    </Column>
                </Row>
                <Row>
                    <label > Simbols: </label>
                    <BtnCheck click={handleSimbols} check = {state.simbols} />
                </Row>

                <Row>
                    <label > Numbers: </label>
                    <BtnCheck click={handleNumbers} check = {state.numbers}/>
                </Row>
                <Row>
                    <label > Uppercase: </label>
                    <BtnCheck click={handleUpper} check = {state.upperCase} />
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
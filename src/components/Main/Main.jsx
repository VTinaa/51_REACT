import { useState } from 'react';
import RegisrtationForm from "../RegistrationForm";
import Products from '../Products';
import RefInput from '../RefInput';
import Modal from '../Modal';

const Main = () => {

    // const { onChangeUsersCount } = props;


    // const [state, setState] = useState('Click text');
    const [text, setText] = useState('Click text');
    const [number, setNumber] = useState(0);

    // let text = 'click text';

    const onButtonClickHandler = () => {
        console.log('Click')
        // text = 'Button was clicked'
        // console.log(text)
        setText('Button was clicked')
    }
    const onPlusNumberHandler = () => {
        setNumber(number + 1)
    }
    const onMinusNumberHandler = () => {
        setNumber(number - 1)
    }

    const [firstInput, setFirstInput] = useState();
    const [secondInput, setSecindInput] = useState();
    const [result, setResult] = useState(0);

    const onChangeFirstInputHandler = (value) => {
        setFirstInput(value)
    }
    const onChangeSecondInputHandler = (value) => {
        setSecindInput(value)
    }

    const onPlusHandler = () => {
        setResult(+firstInput +  +secondInput)
    }
    const onMinusHandler = () => {
        setResult(firstInput - secondInput)
    }
    const onResetResult = () => {
        setResult(0)
    }

    // console.log(firstInput)

    return (
        <div>
            {/* <RegisrtationForm onChangeUsersCount={onChangeUsersCount} /> */}

            <RefInput />

            {/* <RegisrtationForm /> */}


            <Products />
            
            <Modal />



            {/* <button onClick={onButtonClickHandler} type="button">Button</button>
            <div> {text} </div>

            <button onClick={onPlusNumberHandler} type="button">Plus one</button>
            <div> {number} </div>

            <button onClick={onMinusNumberHandler} type="button">Minus one</button> */}

            {/* <input type="number" onChange={(event) => onChangeFirstInputHandler(event.target.value)} />
            <button onClick={onPlusHandler} type="button">+</button>
            <button onClick={onMinusHandler} type="button">-</button>
            <input type="number" onChange={(event) => onChangeSecondInputHandler(event.target.value)}/>
            <div>{ result }</div>
            <button onClick={onResetResult} type="button">Reset Result</button> */}

        </div>
    )
}

export default Main;
const Input = ({ value, type, placeholder, label, onChangeFunction }) => {

    return (
        <label>
            { label }
            <input 
            type={type || 'text'} 
            placeholder={placeholder} 
            onChange={(event) => onChangeFunction(event.target.value)}
            value={value}/>
        </label>
    );
};

export default Input;
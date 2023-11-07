const NavigationItem = (props) =>{
    const { text, isUppercaseText} = props;
    console.log(props);

    // let text = props.text;
    let textToRender;

    // if (props.isUppercaseText){}
    if (isUppercaseText){
        textToRender = text.toUpperCase()
    }
    else {
        textToRender = text
    }
    return (
        // <div>{ props.text }</div>
        <div>{ textToRender }</div>
    )
}

export default NavigationItem;

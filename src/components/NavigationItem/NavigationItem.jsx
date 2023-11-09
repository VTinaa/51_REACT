import './navigationItem.css';

const NavigationItem = (props) =>{
    const { text, isUppercaseText, description, shoulRenderDescription} = props;
    // console.log(props);

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
        // <div>{ textToRender }</div>

        <div>
            <div className="common">
                { textToRender ? text.toUpperCase() : text }
            </div>
            { shoulRenderDescription && (
                <div className="description">
                    {description}
                </div>
            ) }
        </div>
    )
}

export default NavigationItem;

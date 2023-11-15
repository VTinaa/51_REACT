const FooterItem = (props) => {

    const { text, isLowercaseText} = props;
    // console.log(props);

    // let textToRender;
    // isLowercaseText ? textToRender = text.toLowerCase() : textToRender = text.toUpperCase();
    
    let textToRender =  isLowercaseText ? text.toLowerCase() : text.toUpperCase();

    return(
        <div>
            {textToRender}
        </div>
    )
}

export default FooterItem;
import './footer.css'
import FooterItem from '../FooterItem';

const Footer = () => {
    return ( 
    // <div>
    //     This is Footer component
    // </div>
    <div className='common-footer'>
        <FooterItem text='First elem' isLowercaseText={true} />
        <FooterItem text='Second elem' isLowercaseText={false} />
        <FooterItem text='Third elem' isLowercaseText={false} />
        <FooterItem text='Fourth elem' isLowercaseText={true} />
    </div>
    );
}

export default Footer;
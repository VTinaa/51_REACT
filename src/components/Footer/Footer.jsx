import './footer.css'
import FooterItem from '../FooterItem';

import { useContext } from "react";
import { UsersContext } from "../../App";

const Footer = () => {
    const { data } = useContext(UsersContext);
    return (

        <footer>
            <FooterItem text='footer' isLowercaseText={true} />
            <div className='common-footer'>
                <FooterItem text='First elem' isLowercaseText={true} />
                <FooterItem text='Second elem' isLowercaseText={true} />
                <FooterItem text='Third elem' isLowercaseText={false} />
                <FooterItem text='Fourth elem' isLowercaseText={false} />
                <div>User count: {data} </div>
            </div>
        </footer>

    );
}

export default Footer;
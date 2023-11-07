// import { Fragment } from "react";
import './Header.css'
import NavigationItem from "../NavigationItem";

const Header = () => {
    return ( 
        <div className='common-header'>
            <NavigationItem text='First elem' isUppercaseText={true} />
            <NavigationItem text='Second elem' isUppercaseText={false} />
            <NavigationItem text='Third elem' isUppercaseText={false} />
            <NavigationItem text='Fourth elem' isUppercaseText={true} />
        </div>
    );
}

export default Header;
// // import { Fragment } from "react";
// import './Header.css'
// import NavigationItem from "../NavigationItem";

// const Header = () => {

//     // const navElements = [
//     //     'First', 'Second', 'Third'
//     // ];
//     // console.log(navElements.map((element)=> {
//     //     return element.toUpperCase() 
//     // }))

//     return ( 
//         <div className='common-header'>
//             <NavigationItem 
//             text='First elem' 
//             isUppercaseText={true}
//             description="some description"
//             shoulRenderDescription={true} />

//             <NavigationItem 
//             text='Second elem' 
//             isUppercaseText={true}
//             description="second description"
//             shoulRenderDescription={true} />

//             <NavigationItem 
//             text='Third elem' 
//             isUppercaseText={true}
//             description="third description"
//             shoulRenderDescription={true} />

//             <NavigationItem text='Second elem' isUppercaseText={false} />
//             <NavigationItem text='Third elem' isUppercaseText={false} />
//             <NavigationItem text='Fourth elem' isUppercaseText={true} />
//         </div>
//     );
// }

// export default Header;

import NavigationItem from '../NavigationItem/NavigationItem';
import './Header.css';

import { useContext } from "react";
import { UsersContext } from "../../App";


const Header = () => {

   const { data } = useContext(UsersContext);
   console.log(data)



   const navElements = [
      {
         text: 'First',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'Second',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'Third',
         isUppercasetext: true,
         description: "second description",
      },
      {
         text: 'samsung',
         isUppercasetext: true,
      },
   ];
//    console.log(undefined && "Hello" )
  
   return (
      <header>
      <div className='header'>
      {
            navElements.map((element) => {
            return (
               <NavigationItem
                  key={element.text}
                  text={element.text}
                  isUppercasetext={element.isUppercasetext}
                  description={element.description} />
            )
         })
         }
      </div>
      <NavigationItem text='header' isUppercasetext={false} />
      {/* <div>User count: {props.usersCount} </div> */}
      <div>User count: {data} </div>
      </header>);
}

export default Header;
import classNames from "classnames";
import { isEmpty } from "lodash";
import Input from "../Input";
import UserCard from "../UserCard";

import { useState, useContext } from "react";
import { UsersContext } from "../../App";

import { v4 as uuidv4 } from 'uuid';

import styles from './registrationForm.module.css';

const  DEFAULT_USER =[
    {
        name: 'Jhon',
        surname: 'Kem',
        email: 'j@mail.com',
        id: uuidv4()
    },
    {
        name: 'Mark',
        surname: 'Bell',
        email: 'm@mail.com',
        id: uuidv4()
    },
    {
        name: 'Ben',
        surname: 'Mur',
        email: 'b@mail.com',
        id: uuidv4()
    },
    {
        name: 'Nick',
        surname: 'Fair',
        email: 'n@mail.com',
        id: uuidv4()
    },
];

const RegisrtationForm = () => {

    // const { onChangeUsersCount } = props;

    // const contextData = useContext(UsersContext);
    const { changeFunction } = useContext(UsersContext);
    // console.log(contextData)



    const [ users, setUsers ] = useState(DEFAULT_USER);
    // onChangeUsersCount(users.length)
    console.log(users)
    const [isEditMode, setEditMode] = useState(false);
    changeFunction(users.length);

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();

   //// // const [err, setErr] = useState(false)
    // console.log(users)

    const onAddUser = () => {
        const user = {
            name,
            surname,
            email,
            id: uuidv4()
        };

        setUsers([...users, user]);
       //// // if(isEmpty(name) || isEmpty(surname) || isEmpty(email)) {
       //// //     setErr(true)
       //// // }
        setName('');
        setSurname('');
        setEmail('');

    }


    const onGetName = (value) => {
        setName(value)
    };

    const onGetSurname = (value) => {
        setSurname(value)
    };

    const onGetEmail = (value) => {
        setEmail(value)
    };

    const onDeletUserHander = (id) => {
        // console.log(id)
        // console.log(users.filter((user) => user.id !== id))
        setUsers(users.filter((user) => user.id !== id))  
        // const filteredUser =users.filter((user) => user.id !== id)
        // setUsers(filteredUser)
    };

    const onUpdateHander = (id) => {
        // console.log(id)
        const curretUser = users.filter((user) => user.id ===id)[0];
        // console.log(curretUser)
        setName(curretUser.name)
        setSurname(curretUser.surname)
        setEmail(curretUser.email)
    };

    //// // const userListClassName = classNames(styles['user-list'],{[styles['border-res']]:err,})


    return (
        <div className={styles['common']}>
            <Input label="Name:" placeholder="Enter Your Name" onChangeFunction={onGetName} value={name}/>
            <Input label="Surname:" placeholder="Enter Your Surname" onChangeFunction={onGetSurname} value={surname}/>
            <Input label="Email:" placeholder="Enter Your Email" onChangeFunction={onGetEmail} value={email}/>
            <button type="button" onClick={onAddUser}>Add User</button>
            {/* <UserCard /> */}
            <div className={styles['user-list']}>
            {/* <div className={userListClassName}> */}
                { users.map((user, index) => {
                    const { name, surname, email, id} = user;
                    return (<UserCard key={index} name={name} surname={surname} email={email} id={id} onClickDeleteBtn={onDeletUserHander} onCklickUpdateBtn={onUpdateHander}/>)
                })}
            </div>
        </div>
    );
};

export default RegisrtationForm;
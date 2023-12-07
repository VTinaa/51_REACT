import BorderWrapper from '../BorderWrapper';

import { useEffect, useState } from 'react';
import styles from './products.module.css';
import UserCard from "../UserCard"
import QueryLoader from '../QueryLoader';

const Products = () => {
    const [users, setUsers] =useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect( function() {
        setFetching(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
            setUsers(resp)
            setFetching(false)
        })
        .catch(err => {
            // console.log('err =>', err)
            // console.log('userEffect')
            setFetching(false)
            setFetchError(err)
        });
    }, [])

    return (
        <div className={styles["common"]}>
            {/* <div className={styles['common']}>
                <div>{ fetching && 'Data is loading ...' }</div>
                <div>{ fetchError && `Opps, we have error: ${fetchError}` }</div>
            </div> */}
            {console.log(users)}

            <QueryLoader fetching={fetching} error={fetchError}>
                
                { users.map((user, index) => {
                        const { name, username, email, id} = user;
                        return (<UserCard 
                            key={index} 
                            name={name} 
                            surname={username} 
                            email={email} 
                            id={id}/>)
                    })}
                    {/* {console.log(users)} */}

            </QueryLoader>

            {/* {console.log('render')} */}
            {/* <BorderWrapper showDefaultText={true}>
                <div>Hello</div>
                <p>Lorem ipsum dolor sit amet.</p>
            </BorderWrapper> */}
            
        </div>
    );
}

export default Products;

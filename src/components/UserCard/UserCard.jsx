import './userCard.css'

const UserCard = ({ name, surname, email, id, onClickDeleteBtn, onCklickUpdateBtn }) => {
    return (
        <div className='common-user-card'>
            <div>{ `Name : ${name}` }</div>
            <div>{ `Surname : ${surname}` }</div>
            <div>{ `Email : ${email}` }</div>
            <button type='button' onClick={() => {onClickDeleteBtn(id) }}>Delete User</button>
            <button type='button' onClick={() => { onCklickUpdateBtn(id) }}>Update User</button>
            {/* <button type='button' onClick={ onCklickUpdateBtn()}>Update User</button>  викличе відразу*/}
        </div>
    )
}

export default UserCard;
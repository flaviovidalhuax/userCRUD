import React from 'react'
import './styles/userCard.css'

const UserCard = ({user,  deleteUserById, setupdateInfo, setformIsClose}) => {

    console.log(user)
    const handleEdite =() =>{
        setupdateInfo(user)
        setformIsClose(false)
    }



  return (
    <article className='user' >
        <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user_list'>
            <li className='user_item'><span className='user_spam'>Email:</span>{user.email}</li>
            <li className='user_item'><span className='user_spam'>Birthday:</span>
          <div className='user_item-container'>
          <i className="user_gift fa-solid fa-gift"></i>
            {user.birthday}
          </div>
          </li>
        </ul>
  
        <footer className='user_footer' >
        <button className='user_btn' onClick={ () => deleteUserById(user.id)}>
        <i className="user_trash fa-solid fa-trash" ></i>
        </button>
        <button className='user_btn' onClick={handleEdite}>
        <i class="user_edit fa-solid fa-user"></i>
        </button>
        </footer>
       
    
        
    </article>
    
  )
}

export default UserCard
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import "./components/styles/formUser.css"

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {
  const [users, setUsers] = useState()
  //esto para pasar info desde usercard hasta formuser por medio del PADRE
  const [updateInfo, setupdateInfo] = useState()
  const [formIsClose, setformIsClose] = useState(true)
  console.log(updateInfo);

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
      axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err)) 
  }

    useEffect(() => {
        getAllUsers()
    }, [])
    console.log(users)

    // crear nuevo usuario
    const createNewUser = data => {
      const URL = `${baseURL}/users/`
      axios.post(URL, data)
        .then(res => {console.log(res.data)
                    getAllUsers()
        })
        .catch(err => console.log(err))
    }

    // para eliminar un usuario en especifico
    const deleteUserById = id => {
      const URL =`${baseURL}/users/${id}/`
        axios.delete(URL)
        .then(res => {console.log(res)
          getAllUsers()
        })
        .catch(err => console.log(err))
    }
           //para actualizar un usuario en especifico
           const updateUserById = (id, data) => {
            const URL =`${baseURL}/users/${id}/`
                 axios.patch(URL, data)
                 .then(res => {console.log(res.data)
                                getAllUsers()
                })
                 .catch(err => console.log(err))
        }

    const handelOpentFomr = () =>{
      setformIsClose(false)
    }

  return (
    <div className="App">
          <div className='App_conainer-title'>
          <h1 className='App_title'>User CRUD</h1>
          <button onClick={handelOpentFomr} className='App_btn'> create a new user </button>
       
          </div>  
        <div className={`form_container ${formIsClose &&'desable_form'}`}>
        <FormUsers 
                className='App_formUser' 
                createNewUser={createNewUser}
                updateInfo={updateInfo} 
                updateUserById={updateUserById}
                setupdateInfo={setupdateInfo}
                setformIsClose={setformIsClose}
       />
        </div>
      
     <div className='user_coantiner'>
     {
        users?.map( user => (
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setupdateInfo={setupdateInfo}
          setformIsClose={setformIsClose}
          />
        ))
      }
     </div>
    </div>
  )
}

export default App

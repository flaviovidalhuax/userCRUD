import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    birthday:'',
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setupdateInfo, setformIsClose}) => {

   useEffect(() => {

    if(updateInfo){
        reset(updateInfo)
    }

   }, [updateInfo])
   

   const {handleSubmit, reset, register} = useForm()

   const submit = data => {
        if(updateInfo){
            //update
            updateUserById(updateInfo.id, data)
            setupdateInfo()

        }else{
            //create
            createNewUser(data)
        }
        reset(defaultValue)
        setformIsClose(true)
   }

   const handelClouseForm = () => {
    setformIsClose(true)
   }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={setformIsClose} className="form_x fa-solid fa-x"></i>
        <h2 className='form_title'>{updateInfo ?'edit user' : 'New user'}</h2>

        <div className='form_div'>
            <label className='form_label' htmlFor="email">email</label>
            <input className='form_input' placeholder='Enter your email' type="email" id='email'  {...register('email')} />
        </div>
        <div>
            <label className='form_label' htmlFor="password">Password</label>
            <input className='form_input' placeholder='Enter your password' type="password" id='password' {...register('password')}/>
        </div>
        <div>
            <label className='form_label' htmlFor="first_name">first name</label>
            <input className='form_input' placeholder='Enter your first name' type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
            <label className='form_label' htmlFor="last_name">Last Name</label>
            <input className='form_input' placeholder='Enter your last name' type="text" id='last_name' {...register('last_name')} />
        </div>
        <div>
            <label className='form_label' htmlFor="birthday">Birthday</label>
            <input className='form_input' placeholder='Enter your Birtday' type="date" id='birthday' {...register('birthday')}/>
        </div>
        <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>

    </form>
  )
}

export default FormUsers
import React from 'react'
import { deleteUsers } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUsers = () => {
  const dispatch=useDispatch()
  const handleDeleteUsers= () => {
    dispatch(deleteUsers())
  }
  
  return (
    <div className='deleteAllUsers'>
      <button className='' onClick={()=>{handleDeleteUsers()}}>Delete All Users</button>
    </div>
  )
}

export default DeleteAllUsers

import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import fakeUserData from '../api'
import { useDispatch } from 'react-redux'
import userSlice from '../store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'

const UserDetails = () => {
  const {addUser}=userSlice.actions //action creators
  const dispatch=useDispatch() //it is used for calling action creators
  const addNewUser= (name) => {
    const payload={
      name,
      id:Date.now()
    }
    console.log(payload)
    console.log(addUser(payload))
    dispatch(addUser(payload))
  }
  
  return (
    <div className='container userDetails'>
      <div className="content">
          <div className="admin-table">
            <div className="admin-subTitle">
                List of user details
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{addNewUser(fakeUserData())}}>Add User</button>
          </div>
          <ul>
            {/* <li>Hi</li>
            <li>Hello</li> */}
            <DisplayUsers/>
          </ul>
          <hr />
          <DeleteAllUsers/>
      </div>
    </div>
  )
}

export default UserDetails

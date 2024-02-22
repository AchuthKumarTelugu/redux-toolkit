import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.users)//used to select state
  console.log('state data', data)
  const handleDeleteIcon = (id) => {
    console.log('clicked delete icon',id)
    dispatch(removeUser(id))
  }

  return (

    <div className='wrapper'>
      {
        data.length > 0 ? <div className='wrapper-box'>
          {data.map((value, index) => <div className='wrapper-item' key={index}>
            <h5 >{value.name}</h5>
            <button type='button' className='' onClick={() => handleDeleteIcon(value.id)}>
              <MdDeleteForever className='delete-icon' />
            </button>
          </div>)}

        </div> : ''
      }
    </div>
  )
}

export default DisplayUsers

import React from 'react'

export default function NavBar() {
  return (
    <div className=' nav-bar container'>
      <div className="heading">
        <h5>Welcome to Achuth Tutorials</h5>
        <h2>ADMIN TABLE</h2>
        <h5>one destination for complete web development</h5>
      </div>
      <div className="navigation-bar">
        <ul>
            <li className='li1'>Home</li>
            <li className='li2'>Users</li>
            <li className='li3'>Services</li>
            <li className='li4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

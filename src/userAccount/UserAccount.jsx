import React from 'react'
import HomeNavBar from '../home/HomeNavBar'
import NavBarAuth from '../auth/NavBarAuth'

function UserAccount() {
  return (
   <>
   <div className='bg-gray-600 '>
   <NavBarAuth />

      <div className=' w-full'>
        <div>
          <h4 className=''>USER ACCOUNT</h4>
        </div>
        <div>
          <button className='  w-60 p-4 button-background border-white   text-white  text-base
                  rounded-none  hover:border-white'>MAKE A DEPOSIT</button>
          <button className='  w-60 p-4 button-background border-white   text-white  text-base
                  rounded-none  hover:border-white'>WITHDRAWL</button>
        </div>

      </div>
   </div>

   </>
  )
}

export default UserAccount
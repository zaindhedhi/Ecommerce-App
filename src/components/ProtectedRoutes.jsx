import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/Firebase/firebaseconfig';


const ProtectedRoutes = ({component}) => {
    const [user , setUser] = useState(false);

    // useNavigate
    const navigate = useNavigate()

    useEffect(() => {
      onAuthStateChanged(auth , (user) => {
        if(user){
            setUser(true)
            return
        }
            navigate('/')
        
      })
    
    
    }, [])
    
  return (
    user ? component : <div className='flex justify-center items-center w-100 m-20'>
      <h1>Just Minute<span className="flex justify-center items-center loading loading-dots loading-lg"></span></h1>
      
    </div>
   
  )
}

export default ProtectedRoutes
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
            navigate('/login')
        
      })
    
    
    }, [])
    
  return (
    user ? component : <span className="loading loading-dots loading-lg">Just a Minute</span>
   
  )
}

export default ProtectedRoutes
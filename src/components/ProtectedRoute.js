import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function ProtectedRoute({Component}) {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('user')){
      navigate('/')
    }
  })  
  return (
      <Component/>
  )
}

export default ProtectedRoute
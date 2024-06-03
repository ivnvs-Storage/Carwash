import React, { useEffect } from 'react'
import axios from 'axios'

export const Logout: React.FC = () => {
    
    useEffect(() => {
        axios.get('http://localhost:8000/auth/logout', { withCredentials: true }).then(r => {
          console.log(r)
          window.location.assign('http://localhost:5173/login')
        })
      }, [])
    
return (
  <>
  </>
)}

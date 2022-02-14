import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../DB';
import { Outlet, Navigate } from 'react-router-dom';
import { actualizarUsuario } from '../store/reducers/user';
import { useDispatch} from 'react-redux';

const RutasPrivadas = () => {
  
  const dispatch = useDispatch()

  // comprobamos si hay una sesion iniciada
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const dataUsuario = {
        id: user.uid,
        name: user.displayName,
        email: user.email
      }
      dispatch(actualizarUsuario(dataUsuario))
      
    } 
  });
  
  return (
    <>
      {
        localStorage.getItem('currentUser')
          ? <Outlet />
          : <Navigate to='/login'/>
      }
    </>
    )
}

export default RutasPrivadas


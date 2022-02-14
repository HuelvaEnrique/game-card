import React from 'react'
// firebase
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../DB';
// redux
import { actualizarUsuario } from '../../store/reducers/user';
import { useDispatch } from 'react-redux'
// react router dom
import { useNavigate } from 'react-router-dom';
// styles
import { ContentLogin } from './LoginStyles'

const Provider = new GoogleAuthProvider();

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const { user } = await signInWithPopup(auth, Provider);

    const dataUser = {
      id: user.uid,
      name: user.displayName,
      email: user.email
    }
    // guardamos datos de usuario en localstorage
    localStorage.setItem('currentUser', dataUser)
    // guardamos datos de usuario en redux
    dispatch( actualizarUsuario(dataUser))
    navigate('/');
  }

  return (
    <ContentLogin>
      <h2>Inicio de Sesión</h2>
      <button type="button" className="sesion-google" onClick={ signInWithGoogle } >
        Iniciar Sesión con Google
        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt='Google'/>
      </button>
    </ContentLogin>
  )
}

export default Login
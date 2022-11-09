import React from 'react'
import { useState } from 'react'
import { NavBar } from './../ui/NavBar'

//LOGRA TRAER EL TOKEN DE UN USUARIO CARGADO EN LA BASE DE DATOS DE MI SERVIDOR

export const Login = () => {

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
}

const [state, setState] = useState({
    email: '',
    password: ''
})

const { email, password } = state;
const handleInputChange = ({ target }) => {
    setState({
        ...state,
        [target.name]: target.value
    })
};

const handleSubmit = (e) => {
    e.preventDefault();

    
    (async () => {
      options.body = JSON.stringify({ email, password })
      
      const resp = await fetch('http://localhost:3000/loginUser', options)
      
      if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');
      
      const data = await resp.json()
      console.log(data);
    })()
};

  return (
    <div className='row'>
      <NavBar/>
      <center>
        <h1>Iniciar Sesión</h1>
        <div className='container mx-auto d-flex justify-content-center align-items-center'>
        <form
          onSubmit={handleSubmit}
          className='mt-5 border p-4'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              autoComplete='off'
              className='form-control mb-3'
              onChange={handleInputChange}
              value={email}/>

            <label htmlFor="password">Password:</label>
            <input
              type='password'
              name='password'
              autoComplete='off'
              className='form-control'
              onChange={handleInputChange}
              value={password}/>

            <button
              type='submit'
              className='btn btn-primary mt-4'>
                Ingresar
            </button>
          </form>
        </div>
      </center>
    </div>
  )
}

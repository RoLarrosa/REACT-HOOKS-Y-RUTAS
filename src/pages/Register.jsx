import React from 'react'
import { useState } from 'react'
import { NavBar } from './../ui/NavBar'

//LOGRA CARGAR UN NUEVO USUARIO A MI SERVIDOR(BASE DE DATOS)

export const Register = () => {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [rePassword, setRePassword] = useState('')

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
}

const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
})

const { name, email, password } = state;
const handleInputChange = ({ target }) => {
    setState({
        ...state,
        [target.name]: target.value
    })
};

const handleSubmit = (e) => {
    e.preventDefault();

    
    (async () => {
      options.body = JSON.stringify({ name, email, password })
      
      const resp = await fetch('http://localhost:3000/user', options)
      
      if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');
      
      const data = await resp.json()
      console.log(data);
    })()
};


  return (
    <div className=' row'>
      <NavBar/>
      <center>
        <h1>Registrar Usuario</h1>
        <div className='container mx-auto d-flex justify-content-center align-items-center'>
        <form
          onSubmit={handleSubmit}
          className='mt-5 border p-4'>
            <label htmlFor='Nombre'>Nombre:</label>
            <input
              type='text'
              name='name'
              autoComplete='off'
              className='form-control mb-3'
              onChange={handleInputChange}
              value={name}/>
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

            {/*<label htmlFor="Repetir Password">Repetir Password:</label>
            <input
              type='rePassword'
              name='rePassword'
              autoComplete='off'
              className='form-control'
              onChange={handleInputChange}
  value={repassword}/>*/}

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

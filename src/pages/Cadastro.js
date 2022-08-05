import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

import { useNavigate } from 'react-router-dom'

import validator from 'validator'

const url = 'https://dogbreed-api.q9.com.br/register'

const Cadastro = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState('')
  const { httpConfig, callFetch } = useFetch(url)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: email
    }

    httpConfig(data, 'POST')

    if (!validator.isEmail(email)) {
      setEmailError('Escreva um email valido !')
    }

    if(callFetch.user.token){
      navigate('/list')
    }
  }
  return (
    <div>
      <h1>Cadastre seu email para utilizar nosso site</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="text" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button>Cadastrar</button>
        <span>{emailError}</span>
      </form>
    </div>
  )
}

export default Cadastro
import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

const url = 'https://dogbreed-api.q9.com.br/register'

const Cadastro = () => {

  const [user, setUser] = useState([])

  const [email, setEmail] = useState("")

  const [senha, setSenha] = useState("")

  const { data ,  httpConfig } = useFetch(url)

  const handleSubmit = (e) => {
    e.preventDefault()

    const verificarEmail = {
      email
    }

    httpConfig(user, 'POST')

  }
  return (
    <div>
      <h1>Cadastre-se para utilizar nosso site</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input type="text" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro
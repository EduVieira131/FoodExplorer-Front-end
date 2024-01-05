import { CallToAction, Container, InputField, Logo, RegisterLink } from "./styles"

import logo_polygon from '../../assets/polygon.svg'
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { useState } from "react"

import { api } from '../../services/index'
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <h1>food explorer</h1>
      </Logo>

      <InputField>
        <CallToAction>Crie sua conta</CallToAction>

        <Input placeholder="Exemplo: Maria da Silva" label="Seu nome" onChange={e => setName(e.target.value)} />
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" onChange={e => setEmail(e.target.value)} />
        <Input placeholder="No mínimo 6 caracteres" label="Senha" onChange={e => setPassword(e.target.value)} />

        <Button label='Criar conta' onClick={handleSignUp} />

        <RegisterLink to={'/'} >Já tenho uma conta</RegisterLink>
      </InputField>
    </Container>
  )
}
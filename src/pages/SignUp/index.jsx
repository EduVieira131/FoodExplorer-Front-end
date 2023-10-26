import { Container, InputField, Logo, RegisterLink } from "./styles"

import logo_polygon from '../../assets/polygon.svg'
import { Input } from "../../components/input"
import { Button } from "../../components/button"

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <h1>food explorer</h1>
      </Logo>

      <InputField>
        <Input placeholder="Exemplo: Maria da Silva" label="Seu nome" />
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" />
        <Input placeholder="No mínimo 6 caracteres" label="Senha" />

        <Button label='Criar conta'/>

        <RegisterLink to={'/'} >Já tenho uma conta</RegisterLink>
      </InputField>
    </Container>
  )
}
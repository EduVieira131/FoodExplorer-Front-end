import {
  CallToAction,
  Container,
  InputField,
  Logo,
  RegisterLink,
} from "./styles";

import { useState } from "react";
import logo_polygon from "../../assets/polygon.svg";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <h1>food explorer</h1>
      </Logo>

      <InputField>
        <CallToAction>Faça login</CallToAction>

        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn}>Entrar</Button>

        <RegisterLink to={"/register"}>Criar uma conta</RegisterLink>
      </InputField>
    </Container>
  );
}

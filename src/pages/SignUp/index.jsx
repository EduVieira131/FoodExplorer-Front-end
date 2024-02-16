import {
  CallToAction,
  Container,
  InputField,
  Logo,
  RegisterLink,
} from "./styles";

import { useState } from "react";
import { toast } from "sonner";
import logo_polygon from "../../assets/polygon.svg";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignUp() {
    if (!name || !email || !password) {
      toast.warning("Preencha todos os campos para cadastrar um usuário.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar o usuário.");
        }
      });
  }

  return (
    <Container>
      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <h1>food explorer</h1>
      </Logo>

      <InputField>
        <CallToAction>Crie sua conta</CallToAction>

        <Input
          placeholder="Exemplo: Maria da Silva"
          label="Seu nome"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <Button label="Criar conta" onClick={handleSignUp}>
          Criar conta
        </Button>

        <RegisterLink to={"/"}>Já tenho uma conta</RegisterLink>
      </InputField>
    </Container>
  );
}

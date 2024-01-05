import { Header } from "../../components/header";
import { Container, Main } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <h1>Título</h1>
      </Main>

      <footer>Footer</footer>
    </Container>
  )
}
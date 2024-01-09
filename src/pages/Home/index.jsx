import { Card } from "../../components/card";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Container, Main } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <Card title="Produto 1" description="Descrição de teste do produto em questão." price="12,00" imageURL="https://i.pinimg.com/564x/84/e2/c1/84e2c1d771f2ac10b90f72c276054268.jpg" />
      </Main>

      <Footer />
    </Container>
  )
}
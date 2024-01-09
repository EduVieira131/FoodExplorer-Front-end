import { Card } from "../../components/card";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Container, Hero, Main } from "./styles";

import imageProduct from '../../assets/prato1.png'
import heroImage from '../../assets/heroImage.png'

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <Hero>
          <img src={heroImage} alt="Imagem de frutas no ar." />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>


        <Card title="Produto 1" description="Descrição de teste do produto em questão." price="12,00" imageURL={imageProduct} />
      </Main>

      <Footer />
    </Container>
  )
}
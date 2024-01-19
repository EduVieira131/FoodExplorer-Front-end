import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Stepper } from "../../components/stepper";
import { Button } from "../../components/button";
import ImageExample from "../../assets/prato1.png"

import { Container, ContentSection, ControlsPanel, DishDescription, DishIngredients } from "./styles";

import { PiCaretLeft } from "react-icons/pi";

export function Details() {
  return (

    <Container>
      <Header />

      <ContentSection>
        <button>
          <PiCaretLeft />
          Voltar
        </button>

        <img src={ImageExample} alt="Image do prato selecionado" />

        <div>
          <DishDescription>
            <h1>Teste</h1>

            <p>Hello world</p>

            <DishIngredients>

            </DishIngredients>
          </DishDescription>

          <ControlsPanel>
            <Stepper />

            <Button>
              Adicionar produto
            </Button>
          </ControlsPanel>
        </div>
      </ContentSection>

      <Footer />
    </Container>

  )
}
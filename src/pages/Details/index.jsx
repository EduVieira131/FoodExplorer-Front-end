import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Stepper } from "../../components/stepper";
import { Button } from "../../components/button";
import ImageExample from "../../assets/prato1.png"

import { Container, ContentSection, ControlsPanel, DishDescription, DishIngredients } from "./styles";

import { PiCaretLeft } from "react-icons/pi";
import { Tag } from "../../components/tag";

export function Details() {
  return (

    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Cart />
        <Header.Logout />
      </Header.Root>

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
              <Tag>
                Arroz
              </Tag>
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
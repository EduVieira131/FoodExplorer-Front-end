import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Stepper } from "../../components/stepper";
import { Button } from "../../components/button";
import { Tag } from "../../components/tag";
import ImageExample from "../../assets/prato1.png"

import { Container, ContentSection, ControlsPanel, DishDescription, DishIngredients, NavigationButton, Content } from "./styles";

import { PiCaretLeft, PiReceipt } from "react-icons/pi";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState()

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/products/${params.id}`)
      setData(response.data)
    }

    fetchDishes()
  }, [])
  return (

    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Cart />
        <Header.Logout />
      </Header.Root>

      {
        data &&

        <ContentSection>
          <NavigationButton onClick={handleBack}>
            <PiCaretLeft size={32} color="white" />
            voltar
          </NavigationButton>

          <img src={ImageExample} alt="Image do prato selecionado" />

          <Content>
            <DishDescription>
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              <DishIngredients>
                {
                  data.ingredients.map((item) => {
                    return (
                      <Tag key={item.id}>
                        {item.name}
                      </Tag>
                    )
                  })
                }
              </DishIngredients>
            </DishDescription>

            <ControlsPanel>
              <Stepper />

              <Button>
                <PiReceipt size={23} color="white" />
                pedir ∙ {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(data.price)}
              </Button>
            </ControlsPanel>
          </Content>
        </ContentSection>
      }

      <Footer />
    </Container >

  )
}
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Stepper } from "../../components/stepper";
import { Tag } from "../../components/tag";

import {
  Container,
  Content,
  ContentSection,
  ControlsPanel,
  DishDescription,
  DishIngredients,
  NavigationButton,
} from "./styles";

import { PiCaretLeft, PiReceipt } from "react-icons/pi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { USER_ROLE } from "../../roles/roles";

export function Details() {
  const [data, setData] = useState();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Button />
        <Header.Logout />
      </Header.Root>

      {data && (
        <ContentSection>
          <NavigationButton onClick={handleBack}>
            <PiCaretLeft size={32} color="white" />
            voltar
          </NavigationButton>

          <img
            src={`${api.defaults.baseURL}/files/${data.image}`}
            alt="Image do prato selecionado"
          />

          <Content>
            <DishDescription>
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              <DishIngredients>
                {data.ingredients.map((item) => {
                  return <Tag key={item.id}>{item.name}</Tag>;
                })}
              </DishIngredients>
            </DishDescription>

            <ControlsPanel>
              <Stepper />

              {
                user.role === USER_ROLE.ADMIN ? (
                  <Button>Editar produto</Button>
                ) : (
                  <Button>
                <PiReceipt size={23} color="white" />
                pedir ∙{" "}
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(data.price)}
              </Button>
                )
              }
            </ControlsPanel>
          </Content>
        </ContentSection>
      )}

      <Footer />
    </Container>
  );
}

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Section } from "../../components/section";

import heroImage from "../../assets/heroImage.png";

import { Container, ContentSection, Hero, Main } from "./styles";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [snack, setSnack] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    async function fetchProducts(route) {
      const response = await api.get(`${route}`);
      setSnack(
        response.data.filter((data) => data.category.name === "refeição")
      );
      setDessert(
        response.data.filter((data) => data.category.name === "sobremesa")
      );
      setDrinks(
        response.data.filter((data) => data.category.name === "bebida")
      );
    }

    if (query) {
      fetchProducts(`/products?searchTerms=${query}`);
      return;
    }

    fetchProducts("/products");
  }, [query]);
  return (
    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Cart />
        <Header.Logout />
      </Header.Root>

      <Main>
        <Hero>
          <img src={heroImage} alt="Imagem de frutas no ar." />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <ContentSection>
          {snack.length ? (
            <Section category="Refeições" products={snack} />
          ) : null}
          {drinks.length ? (
            <Section category="Bebidas" products={drinks} />
          ) : null}
          {dessert.length ? (
            <Section category="Sobremesas" products={dessert} />
          ) : null}
        </ContentSection>
      </Main>

      <Footer />
    </Container>
  );
}

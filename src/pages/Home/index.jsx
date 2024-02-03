import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Section } from "../../components/section";

import heroImage from "../../assets/heroImage.png";

import { Container, ContentSection, Hero, Main } from "./styles";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    async function fetchProducts(route) {
      const response = await api.get(`${route}`);
      setProducts(response.data);
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

        {!products ? null : (
          <ContentSection>
            <Section
              category="Refeições"
              products={products.filter(
                (product) => product.category.name == "Refeição"
              )}
            />
            <Section
              category="Bebidas"
              products={products.filter(
                (product) => product.category.name == "Bebida"
              )}
            />
            <Section
              category="Sobremesas"
              products={products.filter(
                (product) => product.category.name == "Sobremesa"
              )}
            />
          </ContentSection>
        )}
      </Main>

      <Footer />
    </Container>
  );
}

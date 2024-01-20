import { Card } from "../../components/card";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import heroImage from '../../assets/heroImage.png'

import imageExample from '../../assets/prato1.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Container, Hero, Main, ContentSection, ProductsCategoriesSection } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from '../../services/api'

export function Home() {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchProducts(route) {
      const response = await api.get(`${route}`);
      setProducts(response.data)
    }

    if (query) {
      fetchProducts(`/products?searchTerms=${query}`)
      return
    }

    fetchProducts("/products")
  }, [query])

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
          <ProductsCategoriesSection>
            <h2>Refeições</h2>

            <Swiper
              spaceBetween={16}
              slidesPerView={4}
              direction="horizontal"
              modules={[Navigation]}
              navigation={true}
            >
              {
                products.map(product => {
                  if (product.category.name == "Refeição") {
                    return (
                      <SwiperSlide key={product.id}>
                        <Card.Root>
                          <Card.Content name={product.name} description={product.description} price={product.price} image={imageExample} onClick={() => handleDetails(product.id)} />

                          <Card.ControlPanel />

                          <Card.FavoriteButton />
                        </Card.Root>
                      </SwiperSlide>
                    )
                  }
                })
              }
            </Swiper>
          </ProductsCategoriesSection>

          <ProductsCategoriesSection>
            <h2>Sobremesas</h2>

            <Swiper
              spaceBetween={16}
              slidesPerView={4}
              direction="horizontal"
              modules={[Navigation]}
              navigation={true}
            >
              {
                products.map(product => {
                  if (product.category.name == "Sobremesa") {
                    return (
                      <SwiperSlide key={product.id}>
                        <Card.Root>
                          <Card.Content name={product.name} description={product.description} price={product.price} image={imageExample} onClick={() => handleDetails(product.id)} />

                          <Card.ControlPanel />

                          <Card.FavoriteButton />
                        </Card.Root>
                      </SwiperSlide>
                    )
                  }
                })
              }
            </Swiper>
          </ProductsCategoriesSection>

          <ProductsCategoriesSection>
            <h2>Bebidas</h2>

            <Swiper
              spaceBetween={16}
              slidesPerView={4}
              direction="horizontal"
              modules={[Navigation]}
              navigation={true}
            >
              {
                products.map(product => {
                  if (product.category.name == "Bebida") {
                    return (
                      <SwiperSlide key={product.id}>
                        <Card.Root>
                          <Card.Content name={product.name} description={product.description} price={product.price} image={imageExample} onClick={() => handleDetails(product.id)} />

                          <Card.ControlPanel />

                          <Card.FavoriteButton />
                        </Card.Root>
                      </SwiperSlide>
                    )
                  }
                })
              }
            </Swiper>
          </ProductsCategoriesSection>

        </ContentSection>
      </Main>

      <Footer />
    </Container >
  )
}
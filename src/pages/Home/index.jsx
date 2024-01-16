import { Card } from "../../components/card";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { api } from '../../services/api'
import heroImage from '../../assets/heroImage.png'
import imageExample from '../../assets/prato1.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Container, Hero, Main, ContentSection, ProductsCategoriesSection } from "./styles";

import { useEffect, useState } from "react";

export function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products');
      setProducts(response.data)
    }

    fetchProducts()
  }, [])

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
                        <Card title={product.name} description={product.description} price={product.price} imageURL={imageExample} />
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
                        <Card title={product.name} description={product.description} price={product.price} imageURL={imageExample} />
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
                        <Card title={product.name} description={product.description} price={product.price} imageURL={imageExample} />
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
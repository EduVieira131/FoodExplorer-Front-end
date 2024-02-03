import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageExample from "../../assets/prato1.png";

import { Card } from "../../components/card";

export function Section({ category, products }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  const settings = {
    spaceBetween: 27,
    navigation: products.length >= 3,
    pagination: products.length >= 3 && {
      clickable: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  };

  return (
    <Container>
      <h2>{category}</h2>

      <Swiper {...settings} modules={[Pagination, Navigation, A11y]}>
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Card.Root>
                <Card.Content
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={imageExample}
                  onClick={() => handleDetails(product.id)}
                />

                <Card.ControlPanel />

                <Card.FavoriteButton />
              </Card.Root>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  h2 {
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  .swiper {
    width: 100%;

    padding-block: 32px;
  }

  .swiper-slide {
    height: auto;
    width: auto;

    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.light_100};
  }

  .swiper-button-prev {
    color: white;

    @media (max-width: 760px) {
      display: none;
    }
  }

  .swiper-button-next {
    color: white;

    @media (max-width: 760px) {
      display: none;
    }
  }
`;

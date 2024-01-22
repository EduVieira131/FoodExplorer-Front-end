import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  gap: 1.5rem;

  overflow-x: hidden;
  overflow-y: auto;
`

export const ContentSection = styled.div`
  width: 80vw;
  height: auto;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-inline: auto;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 47px;
  }

  img {
    align-self: center;

    width: 264px;
    height: 264px;

    @media (min-width: 1200px) {
      width: 390px;
      height: 390px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NavigationButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: none;
  border: none;
  cursor: pointer;

  font-family: 'Poppins';
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 140%;

  color: ${({ theme }) => theme.colors.light_300};

  @media (min-width: 1200px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const DishDescription = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    width: fit-content;

    font-family: 'Poppins';
    font-size: 1.625rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  p {
    width: fit-content;

    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    line-height: 140%;

    text-align: center;

    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 1200px) {
    align-items: flex-start;

    h1 {
      font-size: 3rem;
    }

    p {
      text-align: start;

      font-size: 1.5rem;
    }
  }
`

export const DishIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`

export const ControlsPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 48px;

  @media (min-width: 1200px) {
    align-self: flex-start;
  }
`

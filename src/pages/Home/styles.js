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

export const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 85vw;

  margin-inline: auto;

  @media (min-width: 1200px) {
    max-width: 1120px;
  }
`

export const Hero = styled.div`
  width: 100%;
  height: 120px;

  margin-bottom: 62px;
  margin-top: 15px;
  padding-right: 8px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 8px;

  @media (min-width: 1200px) {
    width: 100%;
    height: 260px;

    margin-top: 164px;
  }

  img {
    position: absolute;
    bottom: 0;
    left: -32px;

    width: 191px;
    height: 149px;

    @media (min-width: 1200px) {
      width: 636px;
      height: 406px;

      left: -100px;
    }
  }

  div {
    width: 100%;
    margin-left: 153px;

    display: flex;
    flex-direction: column;
    gap: 3px;

    @media (min-width: 1200px) {
      margin-left: 598px;

      gap: 8px;
    }
  }

  h1 {
    width: 100%;

    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};

    @media (min-width: 1200px) {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  p {
    width: 100%;

    font-family: 'Poppins';
    font-size: 0.6rem;
    font-weight: 400;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};

    @media (min-width: 1200px) {
      font-size: 1rem;
      line-height: 100%;
    }
  }
`

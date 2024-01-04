import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-content: center;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const Logo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-family: Roboto;
    font-size: 38px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.light_100};
  }

  img {
    width: 43px;
    height: 43px;
  }

  @media (min-width: 1200px) {
    width: fit-content;
  }
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin-top: 73px;
  @media (min-width: 1200px) {
    padding: 64px;
    margin-top: 0;

    width: 100%;
    max-width: 480px;

    background: ${({ theme }) => theme.colors.dark_700};
    border-radius: 16px;
  }
`

export const RegisterLink = styled(Link)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.light_100};

  text-decoration: none;
`

export const CallToAction = styled.h1`
  display: none;

  @media (min-width: 1200px) {
    display: flex;

    color: ${({ theme }) => theme.colors.light_100};

    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    line-height: 140%;
  }
`

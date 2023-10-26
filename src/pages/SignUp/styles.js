import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-content: center;
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
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  margin-top: 73px;
`

export const RegisterLink = styled(Link)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.light_100};

  text-decoration: none;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 114px;

  padding: 56px 28px 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.dark_700};

  svg {
    width: 32px;
    height: 32px;
  }
`

export const Logo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-family: Roboto;
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.light_100};
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export const CartProducts = styled.div`
  width: fit-content;
  height: 100%;

  position: relative;

  color: ${({ theme }) => theme.colors.light_100};

  p {
    width: 20px;
    height: 20px;
    padding: 12px;

    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -4px;
    right: -9px;

    border: none;
    border-radius: 99px;

    background-color: ${({ theme }) => theme.colors.tomato_100};
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 210px;
  max-height: 290px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.dark_200};

  @media (min-width: 1200px) {
    max-width: 320px;
    max-height: 460px;
    min-height: 460px;

    gap: 15px;
  }
`

export const Content = styled.button`
  width: 100%;

  background: none;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1200px) {
    gap: 15px;
  }

  img {
    width: 88px;
    height: 88px;

    @media (min-width: 1200px) {
      width: 176px;
      height: 176px;
    }
  }

  h1 {
    width: 100%;
    align-self: center;

    font-size: 0.875rem;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 24px;

    color: ${({ theme }) => theme.colors.light_300};

    @media (min-width: 1200px) {
      max-width: 256px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 1.5rem;
      font-weight: 700;
      line-height: 140%;
    }
  }

  p {
    display: none;

    @media (min-width: 1200px) {
      width: 100%;

      display: block;

      text-align: center;

      font-family: 'Roboto';
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;

      color: ${({ theme }) => theme.colors.light_400};
    }
  }

  span {
    width: 124px;

    text-align: center;

    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.cake_200};

    @media (min-width: 1200px) {
      width: 100%;

      font-size: 2rem;
      line-height: 160%;
    }
  }
`

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1200px) {
    flex-direction: row;

    max-width: 200px;
  }
`

export const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: none;
  border: none;

  &:hover {
    filter: brightness(1.2);
  }

  @media (min-width: 1200px) {
    top: 18px;
    right: 18px;
  }
`

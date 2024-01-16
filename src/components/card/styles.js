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
    max-width: 300px;
    max-height: 460px;
    min-height: 460px;

    gap: 15px;
  }
`

export const ImageWrapper = styled.img`
  width: 88px;
  height: 88px;

  @media (min-width: 1200px) {
    width: 176px;
    height: 176px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1200px) {
    gap: 15px;
  }

  h1 {
    align-self: stretch;
    text-align: center;

    font-size: 0.75rem;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 24px;

    color: ${({ theme }) => theme.colors.light_300};

    @media (min-width: 1200px) {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 140%;
    }
  }

  p {
    display: none;

    @media (min-width: 1200px) {
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
    text-align: center;

    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.cake_200};

    @media (min-width: 1200px) {
      font-size: 2rem;
      line-height: 160%;
    }
  }
`

export const ControlsPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const ActionButton = styled.button`
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

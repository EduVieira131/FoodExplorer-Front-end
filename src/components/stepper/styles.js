import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  p {
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.light_300};

    @media (min-width: 1200px) {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
    }
  }
`

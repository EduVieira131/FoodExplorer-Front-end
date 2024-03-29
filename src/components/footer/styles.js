import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px 0;

  background: ${({ theme }) => theme.colors.dark_600};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.light_700};

    @media (min-width: 1200px) {
      font-size: 24px;
    }
  }
`
export const Paragraph = styled.p`
  font-size: 12px;

  color: ${({ theme }) => theme.colors.light_200};

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 160%;
  }
`

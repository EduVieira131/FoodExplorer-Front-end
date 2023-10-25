import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.light_400};
  }

  input {
    width: 100%;
    height: 48px;
    padding: 12px 14px;

    border-radius: 8px;

    color: ${({ theme }) => theme.colors.light_500};
    background-color: ${({ theme }) => theme.colors.dark_900};

    border: none;
  }
`
import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 12px 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};
`

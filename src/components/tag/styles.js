import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  height: 24px;

  padding: 4px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.dark_1000};

  font-family: 'Poppins';
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.light_100};
`

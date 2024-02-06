import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  max-width: 120px;

  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.colors.light_600};

  color: ${({ theme }) => theme.colors.light_100};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.colors.light_500}` : "none"};

  padding: 10px 16px;

  border-radius: 10px;

  button {
    width: fit-content;

    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.light_500};
  }

  input {
    height: 32px;
    width: 100%;

    padding: 4px;

    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`;

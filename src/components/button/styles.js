import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;

  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.dark_800 : theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tomato_400};
  }
`;

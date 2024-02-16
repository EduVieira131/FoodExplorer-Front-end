import styled from "styled-components";

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

  @media (min-width: 1200px) {
    padding: 24px 123px;

    gap: 32px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;

  padding: 4px 2px;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  header {
    width: 100%;
    height: 114px;

    padding: 56px 28px 24px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    background-color: ${({ theme }) => theme.colors.dark_700};
  }

  main {
    width: 100%;
    height: 100%;

    padding: 36px 28px 12px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.dark_100};

    label {
      width: 100%;
      max-width: 600px;
      max-height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;

      padding: 12px 14px;

      background: ${({ theme }) => theme.colors.dark_900};
      border-radius: 5px;

      &:hover {
        filter: brightness(1.2);
        cursor: pointer;
      }

      &:focus {
        background: none;
        outline: 1px solid white;
      }

      input {
        width: 340px;
        height: 100%;

        display: flex;

        border: none;
        background: none;
        outline: none;

        color: ${({ theme }) => theme.colors.light_100};

        ::placeholder {
          color: ${({ theme }) => theme.colors.light_500};
        }
      }
    }

    div {
      width: 100%;

      margin-top: 36px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const MenuItem = styled.button`
  width: 100%;

  padding: 10px;

  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.light_300};
  text-align: start;

  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};
`;

export const CloseMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-family: Roboto;
  font-size: 1.313rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light_100};

  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Logo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 1200px) {
    width: auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: fit-content;

    @media (min-width: 1200px) {
      flex-direction: column;
      gap: 0;
    }

    h1 {
      font-family: Roboto;
      font-size: 1.313rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.light_100};

      @media (min-width: 1200px) {
        font-size: 24px;
      }
    }

    p {
      height: 100%;

      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.cake_200};

      @media (min-width: 1200px) {
        width: 100%;
        text-align: right;
        transform: translateY(-4px);
      }
    }
  }

  img {
    width: 24px;
    height: 24px;

    @media (min-width: 1200px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Button = styled.button`
  width: fit-content;
  height: 100%;

  background: none;
  border: none;

  position: relative;

  color: ${({ theme }) => theme.colors.light_100};

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    width: auto;
    height: auto;
    padding: 12px 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.colors.tomato_100};
    border-radius: 5px;
  }

  p {
    width: 20px;
    height: 20px;
    padding: 12px;

    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -4px;
    right: -9px;

    border: none;
    border-radius: 99px;

    background-color: ${({ theme }) => theme.colors.tomato_100};

    @media (min-width: 1200px) {
      width: max-content;
      height: auto;
      padding: 0;

      display: inline;

      position: initial;
      border-radius: 0;

      line-height: 24px;
    }

    span {
      display: none;

      @media (min-width: 1200px) {
        display: inline;
      }
    }
  }
`;

export const LogoutButton = styled.button`
  width: auto;
  padding: 4px;

  display: none;

  background: none;
  border: none;

  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: inline;
  }
`;

export const SearchBar = styled.label`
  width: 100%;
  max-width: 600px;

  display: none;
  align-items: center;
  justify-content: center;
  gap: 14px;

  flex: 1;

  padding: 12px 14px;

  background: ${({ theme }) => theme.colors.dark_900};
  border-radius: 5px;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid white;
  }

  @media (min-width: 1200px) {
    display: flex;
  }

  input {
    width: 340px;
    height: 100%;

    display: flex;

    border: none;
    background: none;
    outline: none;

    color: ${({ theme }) => theme.colors.light_100};

    ::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`;

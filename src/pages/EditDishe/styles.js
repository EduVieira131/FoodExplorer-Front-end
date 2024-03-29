import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  gap: 1.5rem;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const Main = styled.div`
  width: 100%;
  height: auto;
  max-width: 85vw;

  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-inline: auto;

  position: relative;

  h1 {
    width: 100%;

    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 1200px) {
    max-width: 1120px;
  }
`;

export const NavigationButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: none;
  border: none;
  cursor: pointer;

  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;

  color: ${({ theme }) => theme.colors.light_300};
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    font-family: "Roboto";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.light_400};
  }

  span {
    font-family: "Roboto";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.light_400};
  }
`;

export const FormFirstSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr;
    gap: 32px;
  }
`;

export const FormSecondSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 3fr 0.7fr;
    gap: 32px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`;

export const ControlsPanel = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  gap: 32px;

  @media (min-width: 1200px) {
    max-width: 380px;

    align-self: flex-end;
  }
`;

export const SelectCategoryInput = styled.select`
  width: 100%;
  height: 48px;
  padding: 12px 14px;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.light_500};
  background-color: ${({ theme }) => theme.colors.dark_900};

  border: none;
`;

export const AddImageButton = styled.label`
  width: 100%;
  height: auto;

  padding: 12px 32px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_900};

  cursor: pointer;

  span {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.light_100};
  }

  input {
    display: none;
  }
`;

export const DescriptionTextarea = styled.textarea`
  width: 100%;
  resize: none;

  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.dark_900};

  font-family: "Roboto";
  color: ${({ theme }) => theme.colors.light_500};
`;

export const TagSection = styled.div`
  width: 100%;
  max-height: 48px;

  padding: 4px 8px;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;

  overflow-x: auto;

  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.dark_900};
`;

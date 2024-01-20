import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function CardRoot({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
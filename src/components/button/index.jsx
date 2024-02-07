import { Container } from "./styles";

export function Button({ secondary, children, ...rest }) {
  return (
    <Container secondary={secondary} {...rest}>
      {children}
    </Container>
  );
}

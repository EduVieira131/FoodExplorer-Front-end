import { Container } from './styles'

export function Button({ label, ...rest }) {
  return (
    <Container {...rest}>
      {label}
    </Container>
  )
}
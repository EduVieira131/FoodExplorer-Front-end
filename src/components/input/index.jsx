import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function Input({ type, placeholder, label, ...rest }) {
  return (
    <Container>
      <p>{label}</p>
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}
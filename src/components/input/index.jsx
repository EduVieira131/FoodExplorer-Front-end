import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function Input({ placeholder, label, ...rest }) {
  return (
    <Container>
      <p>{label}</p>
      <input type="text" placeholder={placeholder} {...rest} />
    </Container>
  )
}
import { Container } from './styles'

export function Input({ placeholder, label }) {
  return (
    <Container>
      <p>{label}</p>
      <input type="text" placeholder={placeholder} />
    </Container>
  )
}
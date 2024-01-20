import { Content } from "./styles";

// eslint-disable-next-line react/prop-types
export function CardContent({ image, name, description, price, ...rest }) {
  return (
    <Content {...rest}>
      <img src={image} alt={name} />

      <h1>{name} {">"}</h1>
      <p>{description}</p>

      <span>R$ {price}</span>
    </Content>
  )
}
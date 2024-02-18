import { Content } from "./styles";
import { api } from "../../services/api";

// eslint-disable-next-line react/prop-types
export function CardContent({ image, name, description, price, ...rest }) {
  return (
    <Content {...rest}>
      <img src={`${api.defaults.baseURL}/files/${image}`} alt={name} />

      <h1>{name} {">"}</h1>
      <p>{description}</p>

      <span>
        {new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(price)}
      </span>
    </Content>
  )
}
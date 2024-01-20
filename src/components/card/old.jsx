import { ActionButton, Container, Content, ControlsPanel, ImageWrapper } from "./styles";


import { Button } from '../button'
import { Stepper } from "../stepper";

// eslint-disable-next-line react/prop-types
export function Card({ title, description, price, imageURL, ...rest }) {
  return (
    <Container {...rest}>
      <ImageWrapper src={imageURL} />

      <Content>
        <h1>{title} {">"}</h1>
        <p>{description}</p>

        <span>R$ {price}</span>
      </Content>

      <ControlsPanel>
        <Stepper />

        <Button>
          incluir
        </Button>
      </ControlsPanel>

      <ActionButton>
      </ActionButton>
    </Container>
  )
}
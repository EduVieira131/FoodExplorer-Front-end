import { CartProducts, Container, Logo } from "./styles";

import logo_polygon from '../../assets/polygon.svg'

import { PiReceipt } from 'react-icons/pi'
import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  return (
    <Container>
      <AiOutlineMenu />

      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <h1>food explorer</h1>
      </Logo>

      <CartProducts>
        <PiReceipt />
        <p>0</p>
      </CartProducts>
    </Container>
  )
}
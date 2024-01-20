import { CartButton } from "./styles";

import { PiReceipt } from 'react-icons/pi'

export function HeaderCart() {
  return (
    <CartButton>
      <PiReceipt color="white" width={32} />
      <p><span>Pedidos </span>0</p>
    </CartButton>
  )
}
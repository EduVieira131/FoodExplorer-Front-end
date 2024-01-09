import { Container } from "./styles";

import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

export function Stepper() {
  return (
    <Container>
      <button>
        <GoDash color="#E1E1E6" size={24} />
      </button>

      <p>01</p>

      <button>
        <GoPlus color="#E1E1E6" size={24} />
      </button>
    </Container>
  )
}
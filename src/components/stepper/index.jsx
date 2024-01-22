import { useState } from "react";
import { Container } from "./styles";

import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

export function Stepper() {
  const [counter, setCounter] = useState(1)

  function increaseCounter() {
    setCounter(counter => counter + 1)
  }

  function decreaseCounter() {
    if (counter == 1) {
      return
    }

    setCounter(counter => counter - 1)
  }

  return (
    <Container>
      <button onClick={decreaseCounter}>
        <GoDash color="#E1E1E6" size={24} />
      </button>

      <p>{counter}</p>

      <button onClick={increaseCounter}>
        <GoPlus color="#E1E1E6" size={24} />
      </button>
    </Container>
  )
}
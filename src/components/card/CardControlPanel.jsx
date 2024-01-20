import { ControlPanel } from "./styles";

import { Button } from "../button";
import { Stepper } from "../stepper";

export function CardControlPanel() {
  return (
    <ControlPanel>
      <Stepper />

      <Button>
        incluir
      </Button>
    </ControlPanel>
  )
}
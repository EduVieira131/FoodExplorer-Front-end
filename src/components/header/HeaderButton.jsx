import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../roles/roles";
import { Button } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function HeaderButton() {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    if (user.role === USER_ROLE.CUSTOMER) {
      return;
    }

    navigate("/new_product");
  }

  return (
    <Button onClick={handleClick}>
      {user.role === USER_ROLE.ADMIN ? (
        <span>Novo prato</span>
      ) : (
        <div>
          <PiReceipt color="white" width={32} />
          <p>
            <span>Pedidos </span>0
          </p>
        </div>
      )}
    </Button>
  );
}

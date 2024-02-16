import { Logo } from "./styles";

import logo_polygon from "../../assets/polygon.svg";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../roles/roles";

export function HeaderLogo() {
  const { user } = useAuth();

  return (
    <Logo>
      <img src={logo_polygon} alt="Logo image" />
      <div>
        <h1>food explorer</h1>
        {user.role === USER_ROLE.ADMIN ? <p>admin</p> : null}
      </div>
    </Logo>
  );
}

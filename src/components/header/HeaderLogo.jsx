import { Logo } from "./styles";

import logo_polygon from '../../assets/polygon.svg'

import { useAuth } from '../../hooks/auth'

export function HeaderLogo() {
  const { user } = useAuth()

  return (
    <Logo>
      <img src={logo_polygon} alt="Logo image" />
      <div>
        <h1>food explorer</h1>
        {user.isAdmin ? <p>admin</p> : null}
      </div>
    </Logo>
  )
}
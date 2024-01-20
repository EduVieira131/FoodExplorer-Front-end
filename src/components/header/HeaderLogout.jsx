import { LogoutButton } from "./styles";

import { GoSignOut } from "react-icons/go";

import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

export function HeaderLogout() {
  const navigate = useNavigate()
  const { signOut } = useAuth()


  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <LogoutButton onClick={handleSignOut}>
      <GoSignOut color="white" />
    </LogoutButton>
  )
}
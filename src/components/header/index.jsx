import { CartButton, Container, Logo, LogoutButton, MenuButton, SearchBar } from "./styles";

import logo_polygon from '../../assets/polygon.svg'

import { PiReceipt } from 'react-icons/pi'
import { AiOutlineMenu } from 'react-icons/ai'
import { GoSignOut } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header({ onSearch }) {
  const { signOut, user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm])

  return (
    <Container>
      <MenuButton>
        <AiOutlineMenu color="white" />
      </MenuButton>

      <Logo>
        <img src={logo_polygon} alt="Logo image" />
        <div>
          <h1>food explorer</h1>
          {user.isAdmin ? <p>admin</p> : null}
        </div>
      </Logo>

      <SearchBar label="searchTerm">
        <CiSearch color="#C4C4CC" />
        <input type="text" id="searchTerm" placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearchTerm(e.target.value)} />
      </SearchBar>

      <CartButton>
        <PiReceipt color="white" width={32} />
        <p><span>Pedidos </span>0</p>
      </CartButton>

      <LogoutButton onClick={handleSignOut}>
        <GoSignOut color="white" />
      </LogoutButton>
    </Container>
  )
}
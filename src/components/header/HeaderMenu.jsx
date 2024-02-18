import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { Footer } from "../footer/index";

import { CloseMenuButton, MenuButton, MenuItem, SideMenu } from "./styles";
import { USER_ROLE } from "../../roles/roles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderMenu() {
  const { signOut, user } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(event) {
    if (event.key === "Enter") {
      navigate(`/?search=${event.target.value}`);
      setMenuIsOpen(false);
      event.target.value = "";
    }
  }

  function handleAddDisheNavigation() {
    if (user.role === USER_ROLE.CUSTOMER) {
      return;
    }

    navigate("/new_product");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <>
      <MenuButton onClick={() => setMenuIsOpen(true)}>
        <AiOutlineMenu color="white" />
      </MenuButton>

      <SideMenu data-menu-is-open={menuIsOpen}>
        <header>
          <CloseMenuButton onClick={() => setMenuIsOpen(false)}>
            <AiOutlineClose color="white" />
            Menu
          </CloseMenuButton>
        </header>

        <main>
          <label label="searchTerm">
            <CiSearch color="#C4C4CC" />
            <input
              type="text"
              id="searchTerm"
              placeholder="Busque por pratos ou ingredientes"
              onKeyDown={handleSearch}
            />
          </label>

          <div>
            <MenuItem onClick={handleAddDisheNavigation}>Novo prato</MenuItem>
            <MenuItem onClick={handleSignOut}>Sair</MenuItem>
          </div>
        </main>

        <Footer />
      </SideMenu>
    </>
  );
}

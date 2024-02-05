import { SearchBar } from "./styles";

import { CiSearch } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

export function HeaderSearchBar() {
  const navigate = useNavigate();

  function handleSearch(event) {
    if (event.key === "Enter") {
      navigate(`/?search=${event.target.value}`);
      event.target.value = "";
    }
  }

  return (
    <SearchBar label="searchTerm">
      <CiSearch color="#C4C4CC" />
      <input
        type="text"
        id="searchTerm"
        placeholder="Busque por pratos ou ingredientes"
        onKeyDown={handleSearch}
      />
    </SearchBar>
  );
}

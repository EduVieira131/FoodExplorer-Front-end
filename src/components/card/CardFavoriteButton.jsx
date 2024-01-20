import { FavoriteButton } from "./styles";

import { CiHeart } from "react-icons/ci";

export function CardFavoriteButton() {
  return (
    <FavoriteButton>
      <CiHeart size={24} color="#E1E1E6" />
    </FavoriteButton>
  )
}
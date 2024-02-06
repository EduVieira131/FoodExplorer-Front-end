import { Route, Routes } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NewDishe } from "../pages/NewDishe";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new_product" element={<NewDishe />} />
    </Routes>
  );
}

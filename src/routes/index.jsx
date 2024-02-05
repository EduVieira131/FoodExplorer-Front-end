import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { useEffect } from "react";
import { USER_ROLE } from "../roles/roles";
import { api } from "../services/api";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if (error.response?.status === 401) {
        signOut();
        console.log(error);
      }
    });
  }, []);

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}

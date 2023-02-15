import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Headerlayout } from "../components/templates/Headerlayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Headerlayout>{<Home />}</Headerlayout>} />
        <Route
          path="/home/user_management"
          element={<Headerlayout>{<UserManagement />}</Headerlayout>}
        />
        <Route
          path="/home/setting"
          element={<Headerlayout>{<Setting />}</Headerlayout>}
        />
        <Route path="*" element={<Headerlayout>{<Page404 />}</Headerlayout>} />
      </Routes>
    </LoginUserProvider>
  );
});

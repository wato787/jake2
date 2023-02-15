import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";
import { User } from "../types/api/User";

export type LoginUserContextType = {
  loginUser: LoginUser|null;
  setLoginUser: Dispatch<SetStateAction<LoginUser| null>>;
};

type LoginUser= User &{isAdmin:boolean}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser| null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

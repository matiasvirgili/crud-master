import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ICredentials } from "../types/types";
import {
  clearCredentials,
  setCredentialsLocalStorage,
} from "../utils/credentials.helper";

export const useAuth = () => {
  const { setCredentials, credentials } = useContext(AuthContext);

  const logout = () => {
    setCredentials(undefined);
    clearCredentials();
  };

  const saveCredentials = (obj: ICredentials) => {
    setCredentials(obj);
    setCredentialsLocalStorage(obj);
  };

  return { credentials, logout, saveCredentials };
};

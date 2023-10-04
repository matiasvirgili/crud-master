import { useDispatch, useSelector } from "react-redux";
import { onChecking } from "../../store/auth/AuthSlice";
import { RootState } from "../../store/store";

const useAuthSlice = () => {
  const { isLoading, status } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const startCheckingCredentials = () => {
    dispatch(onChecking());
  };

  return {
    // Propiedades
    isLoading,
    status,
    // Métodos
    startCheckingCredentials,
  };
};

export default useAuthSlice;

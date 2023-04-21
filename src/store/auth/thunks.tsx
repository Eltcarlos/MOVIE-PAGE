import { checkingCredentials, login } from "./authSlice";
import { fetchSinToken } from "../../helpers/Fetch";
import { Login, Result } from "../../interfaces/auth";
import toast from "react-hot-toast";

export const startSignIn = (form: Login) => {
  return async (dispatch: any) => {
    try {
      dispatch(checkingCredentials());
      const result: Result = await fetchSinToken("api/auth/login", form, "POST");

      if (!result.ok) {
        toast.error(result.msg === "Error" ? "We can't find an account with this email address" : result.msg);
        return;
      }

      localStorage.setItem("token", result.token);
      dispatch(login(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};

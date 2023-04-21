import { fetchSinToken } from "../../helpers/Fetch";
import { Movies } from "../../interfaces/movies";
import { getMovies } from "./movieSlice";

export const getAllMovies = () => {
  return async (dispatch: any) => {
    try {
      const result: Movies = await fetchSinToken("api/movies");
      dispatch(getMovies(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

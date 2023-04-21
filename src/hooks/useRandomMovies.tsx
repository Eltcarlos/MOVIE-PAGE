import { useSelector } from "react-redux";
import { state } from "../interfaces/state";

export const useRandomMovies = () => {
  const { movies }: any = useSelector((state: state) => state.movieState);

  const movieRandom = movies?.map((movie: any) => {
    const url = movie.video[0].trailer;
    const name = movie.name;
    const image = movie.image;
    const id = movie._id;
    return {
      id,
      url,
      name,
      image,
    };
  });
  const getRandomItem = (movieRandom: any) => {
    const randomIndex = Math.floor(Math.random() * movieRandom.length);
    const item = movieRandom[randomIndex];
    return item;
  };
  const result = getRandomItem(movieRandom);
  return {
    result,
  };
};

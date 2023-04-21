import { useEffect } from "react";
import { Layout } from "../layout/Layout";
import CarouselScreen from "../components/HomeScreen/Carousel";
import { Banner } from "../components/HomeScreen/Banner";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../interfaces/state";
import { getAllMovies } from "../store/movies/thunks";
import { SwiperScreen } from "../components/HomeScreen/Swiper";
import { useRandomMovies } from "../hooks/useRandomMovies";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: state) => state.movieState);

  useEffect(() => {
    dispatch(getAllMovies() as any);
  }, [dispatch]);

  const { result } = useRandomMovies();

  return (
    <Layout>
      <Banner movies={result as []} />
      <SwiperScreen movies={movies as []} />
      <CarouselScreen movies={movies as []} />
    </Layout>
  );
};

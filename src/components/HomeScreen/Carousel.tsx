import { Datum } from "../../interfaces/movies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

interface Props {
  movies: Datum[];
}

const CarouselScreen = ({ movies }: Props) => {
  return (
    <div className="bg-main px-10">
      <h1 className="text-white font-mono">Peliculas más votadas</h1>
      <Swiper
        slidesPerView={6}
        loop={true}
        speed={1000}
        modules={[Autoplay, Pagination]}
        autoplay={true}
        breakpoints={{
          0: { slidesPerView: 4, spaceBetween: 10 },
          400: { slidesPerView: 6, spaceBetween: 10 },
          768: { slidesPerView: 6, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 10 },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Link to={`/movie/${movie?._id}`}>
                <img className="object-fill h-26 w-full " src={movie?.image} alt={movie?.name} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselScreen;

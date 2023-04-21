import { useSelector } from "react-redux";
import { state } from "../interfaces/state";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { FaShareAlt } from "react-icons/fa";
import FlexMovieItems from "../components/HomeScreen/FlexMovieItems";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const SingleMovie = () => {
  const { movies }: any = useSelector((state: state) => state.movieState);
  const { id } = useParams();
  const NewMovie = movies?.filter((movie: any) => movie._id === id)[0];

  return (
    <Layout>
      <div className="w-full xl:h-screen relative text-white">
        <img src={NewMovie?.image} alt={NewMovie?.name} className="w-full hidden xl:inline-block h-full object-cover" />
        <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
          <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-0 lg:py-20 gap-8">
            <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
              <img src={NewMovie?.titleImage} alt={NewMovie?.name} className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
              <div className="col-span-3 flex flex-col gap-10">
                {/* Tittle */}
                <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">{NewMovie.name}</h1>
                {/* flex items */}
                <div className="flex items-center gap-4 font-medium text-dryGray">
                  <div className="flex-colo bg-subMain text-xs px-2 py-1">HD 4K</div>
                  <FlexMovieItems movie={NewMovie} />
                </div>
                {/* Description */}
                <p className="text-text text-sm leading-7">{NewMovie?.desc}</p>
                <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                  {/* Share */}
                  <div className="col-span-1 flex-colo border-r border-border">
                    <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                      <FaShareAlt />
                    </button>
                  </div>
                  {/* Language */}
                  <div className="col-span-2 flex-colo font-medium text-sm">
                    <p>
                      Language : <span className="ml-2 truncate">{NewMovie.language}</span>
                    </p>
                  </div>
                  {/* Share */}
                  <Link
                    to={`/watch/${NewMovie?._id}`}
                    className="bg-alert hover:text-main transitions   text-white  font-bold px-5 py-3 rounded  sm:text-sm text-sm"
                  >
                    Watch
                  </Link>
                </div>
              </div>
              <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                <button className="md:w-1/4 w-full relative flex-colo bg-alert hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium">
                  <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                    Download <BsFillArrowDownCircleFill size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

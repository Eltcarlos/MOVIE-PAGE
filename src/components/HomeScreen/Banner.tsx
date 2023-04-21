import { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { BsFillExclamationCircleFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export const Banner = ({ movies }: any) => {
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY < 420 ? [setMuted(false), setPlay(true)] : [setMuted(true), setPlay(false)];
    });
  }, []);

  console.log(movies);

  return (
    <div className="flex flex-col relative center ">
      <div className="w-full h-screen shadow-2xl">
        <ReactPlayer
          url={movies.url}
          loop
          playing={play}
          muted={muted}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="sm:top-0 md:top-2/3  left-20 absolute">
        <div className="">
          <h2 className="sm: hidden md:block font-sans text-5xl font-bold ">{movies.name}</h2>
          <div className="mt-2 flex flex-row space-x-2">
            <Link to={`/movie/${movies?.id}`}>
              <button className=" flex flex-row bg-white  hover:bg-gray-100 text-gray-800 font-light py-2 px-4 border rounded shadow">
                <BiRightArrow size={25} /> Reproducir
              </button>
            </Link>
            <button className="flex flex-row text-white bg-zinc-600 opacity-50  py-2 px-4 border rounded shadow hover:opacity-30">
              <BsFillExclamationCircleFill size={25} />
              <h1 className="ml-2">Más Información</h1>
            </button>
            {muted ? (
              <button className="w-10 h-10 pl-2 rounded-full border-white border" onClick={() => setMuted(false)}>
                <BsFillVolumeMuteFill size={25} />
              </button>
            ) : (
              <button className="w-10 h-10 pl-2 rounded-full border-white border" onClick={() => setMuted(true)}>
                <BsFillVolumeDownFill size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

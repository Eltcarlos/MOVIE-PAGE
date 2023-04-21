import React, { useState } from "react";
import { useSelector } from "react-redux";
import { state } from "../interfaces/state";
import { useParams } from "react-router-dom";
import { Layout } from "../layout/Layout";
import ReactPlayer from "react-player";
import { ControlBar, Player } from "video-react";

export const WatchPage = () => {
  const { movies }: any = useSelector((state: state) => state.movieState);
  const { id } = useParams();
  const NewMovie = movies?.filter((movie: any) => movie._id === id)[0];
  const [play, setPlay] = useState(true);
  console.log(NewMovie.video[0].link);
  return (
    <Layout>
      <div className="h-screen w-auto flex flex-row items-center bg-zinc-700 relative p-6 mb-12">
        <div className="h-full">
          <img src={NewMovie.titleImage} alt={NewMovie?.name} className="w-full h-full shadow-xl" />
        </div>
        {/* watch video */}
        {play ? (
          <div className=" flex flex-col justify-center items-center w-full h-full">
            <iframe
              title="img"
              width="900"
              height="600"
              src="https://mega.nz/embed/ow0AXTIB#m_PMpG41iyF7WNJDcnqTFzUXw3qEroCuwDRmISMyZzc"
            ></iframe>
          </div>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <img src={NewMovie?.image} alt={NewMovie?.name} className="w-full h-full object-cover rounded-lg" />
          </div>
        )}
      </div>
    </Layout>
  );
};

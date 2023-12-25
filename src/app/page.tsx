"use client";

import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import VideoFormats from "@/components/VideoFormats";
import VideoInfo from "@/components/VideoInfo";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [videoData, setVideoData] = useState();
  const [requesting, setRequesting] = useState(false);

  const loadVideoDetails = async () => {
    setRequesting(true);
    try {
      const videoInfo = await axios.get(`/api/video/info?url=${value}`);
      setVideoData(videoInfo?.data);

      console.log(videoInfo?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleSubmit = async () => {
    if (!value.trim()) return;
    loadVideoDetails();
  };

  return (
    <main className="w-full bg-slate-300 p-[0] sm:p-[1rem] ">
      <div className="w-full px-[1.6rem] md:px-[5rem] lg:px-[10rem] py-[2rem] max-w-[90rem] m-auto bg-white sm:rounded-lg ">
        <Header />
        <hr className="my-[1rem] bg-slate-500 h-[0.15rem] rounded-lg" />
        <SearchBox
          value={value}
          requesting={requesting}
          onChange={(e) => setValue(e.target.value)}
          handleSubmit={handleSubmit}
          placeholder={"Patse link here..."}
          className="w-content py-2"
        />
        {videoData && (
          <>
            <VideoInfo data={videoData} />
            <hr className="my-[1rem] bg-slate-500 h-[0.15rem] rounded-lg" />

            <VideoFormats data={videoData} />
          </>
        )}
      </div>
    </main>
  );
}

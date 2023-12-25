/* eslint-disable @next/next/no-img-element */
import React from "react";

import KeywordContainer from "./KeywordContainer";

interface VideoInfoProps {
  data: VideoData;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-[2rem] mt-[2rem]">
      <div className="w-full">
        <a
          target="_blank"
          className="ui medium image w-100"
          href={data.videoUrl}
          rel="noreferrer"
        >
          <img src={data.thumbnail} alt="Video Thumbnail" className="w-100" />
        </a>
        <h6 className="text-[1.6rem] sm:text-[1.8rem] my-[1rem] text-center">
          {data.title}
        </h6>
      </div>
      <div className="w-full">
        <KeywordContainer keywords={data.keywords} />
      </div>
    </div>
  );
};

export default VideoInfo;

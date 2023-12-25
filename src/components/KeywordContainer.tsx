import React, { useEffect, useState } from "react";

interface KeywordContainerProps {
  keywords: string[];
}

const KeywordContainer: React.FC<KeywordContainerProps> = ({ keywords }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyKeywords = () => {
    navigator.clipboard.writeText(keywords.join(", "));
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  if (!keywords || keywords.length === 0)
    return (
      <div className="w-full">
        <div className="text-[1.6rem] text-red-500 p-[1rem]">
          This video doesn&apos;t have any keyword!
        </div>
      </div>
    );

  return (
    <div className="w-full  bg-slate-200 border border-gray-500 rounded-lg">
      <div className="w-full flex justify-between items-center p-[1rem]">
        <span className="text-gray-500 text-[1.4rem]">Keywords:</span>
        <button
          className="text-[1.4rem] bg-[#6AC5F6] hover:bg-[#4db6ee] text-white px-3 py-1 rounded-md "
          onClick={copyKeywords}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex flex-wrap p-[1rem]  w-full ">
        {keywords.map((keyword) => (
          <div
            className="m-[0.25rem] !text-[2rem] bg-white rounded-[1rem] p-[0.5rem] flex justify-center items-center border"
            key={keyword}
          >
            <div className="">{keyword}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordContainer;

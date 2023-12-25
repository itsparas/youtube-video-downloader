import React from "react";

interface SearchBox {
  value: string;
  requesting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  placeholder?: string;
  className?: string;
}

const SearchBox: React.FC<SearchBox> = ({
  value,
  requesting,
  onChange,
  handleSubmit,
  placeholder = "Search...",
  className = "",
}) => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit} className={className}>
      <label
        htmlFor="url"
        className="text-[1.6rem] md:text-[2rem] font-medium "
      >
        Enter Youtube Url
      </label>
      <div className="w-full flex flex-col sm:flex-row gap-[1rem] sm:gap-0 mt-[1rem]">
        <div className="flex-grow-[3]">
          <input
            id="url"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-[0.8rem] text-[1.6rem] md:text-[2rem] outline-none border-gray-400 border-[0.1rem] sm:border-r-0 rounded-lg sm:rounded-none sm:rounded-l-lg"
          />
        </div>
        <button
          type="submit"
          className="min-w-[18rem] flex-grow-[1] bg-[#6AC5F6] text-[white]  py-[0.8rem]  rounded-lg sm:rounded-none sm:rounded-r-lg"
        >
          <div className="flex gap-[0.5rem] items-center justify-center">
            {requesting && (
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
            )}
            <span className="text-[1.6rem] md:text-[2rem] ">Search</span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;

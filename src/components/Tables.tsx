import React from "react";

interface TableProps {
  headings: string[];
  data: any[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ headings, data, className = "" }) => {
  const sampleItem = data[0];

  if (!data || data.length === 0 || Object.keys(sampleItem).length === 0)
    return <></>;

  const keys = Object.keys(sampleItem);

  return (
    <div className={`${className}`}>
      <table className="w-full table-fixed ">
        <thead className="">
          <tr className="bg-gray-100">
            {headings.map((heading) => (
              <th
                className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase text-[1.6rem] "
                key={heading}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={`${item["key"] || item[keys[0]]}`}>
              {keys.map((key) => {
                if (key !== "key")
                  return (
                    <td
                      key={`${item["key"]} ${key}`}
                      className="py-4 px-6 border-b border-gray-200 text-[1.6rem] "
                    >
                      {item[key]}
                    </td>
                  );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from "react";
import Link from "next/link";
const catCard = ({ data }) => {
  return (
    <Link href={`/setup/${data.slug}`}>
      <div className="relative h-64">
        <div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-500/10 ">
            <h2 className="text-white">{data.title}</h2>
          </div>
        </div>
        <img src={data.image} className="w-full h-full" alt="chair" />
      </div>
    </Link>
  );
};

export default catCard;

import React from "react";
import Link from "next/link";
import RunwayCard from "../runway-card";

const runways = [
  {
    id: 1,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
  {
    id: 2,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
  {
    id: 3,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
  {
    id: 4,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
  {
    id: 5,
    image:
      "https://assets.vogue.com/photos/66f84ce3b7a248afbd81786b/master/w_1280,c_limit/_OBY0008.jpg",
  },
];

function TopRunways() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Top Runways</h2>
        <Link href={"runways"} className="hover:underline">
          See all
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {runways.map((runway) => (
          <RunwayCard key={runway.id} id={runway.id} image={runway.image} />
        ))}
      </div>
    </section>
  );
}

export default TopRunways;

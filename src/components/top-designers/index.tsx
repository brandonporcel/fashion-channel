import React from "react";
import Link from "next/link";
import DesignerCard from "../designer-card";

const designers = [
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

function TopDesigners() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Top Designers</h2>
        <Link href={"designers"} className="hover:underline">
          See all
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
        {designers.map((designer) => (
          <DesignerCard key={designer.id} />
        ))}
      </div>
    </section>
  );
}

export default TopDesigners;

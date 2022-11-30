import Button from "../Button";
import { motion } from "framer-motion";

import { BiWorld } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
import { convertTimestamp } from "./app";

const Movie = ({ variant }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(convertTimestamp(variant.createdAt.seconds));
  }, []);

  return (
    <motion.div id="movie" className="bg-[#2F2F2F] p-4 rounded-xl duration-200">
      <div className="relative h-[280px] md:h-[400px] sm:h-[400px] rounded-md overflow-hidden duration-200">
        {variant.createdAt && (
          <div className="absolute top-2 right-2 bg-green-800 px-4 py-1 rounded-md text-xs">
            {date}
          </div>
        )}
        <img src={variant.img} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Information */}
      <div>
        <h2 className="mt-4">{variant.name}</h2>
        {/* Extra Information */}
        <div className="flex justify-between my-2 text-sm opacity-70">
          <p className="flex gap-2 items-center">
            <BiWorld />
            {variant.country}
          </p>
          <p className="flex gap-2 items-center">
            <MdOutlineDateRange />
            {variant.year}
          </p>
        </div>
        <Button />
      </div>
    </motion.div>
  );
};

export default Movie;

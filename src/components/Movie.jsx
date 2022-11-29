import Button from "./Button";
import { motion } from "framer-motion";

import { BiWorld } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";

const Movie = ({ variant }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(convertTimestamp(variant.createdAt.seconds));
  }, []);
  console.log({ date });

  function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    // ie: 2013-02-18, 8:35 AM
    time = h + ":" + min + " " + ampm;

    return `${mm}/${dd} ${time}`;
  }

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
        <div className="flex justify-between my-2">
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

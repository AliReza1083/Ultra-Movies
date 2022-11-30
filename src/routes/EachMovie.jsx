import { useLocation } from "react-router-dom";
import { db } from "../utils/Add";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

import Button from "../components/Button";

const EachMovie = () => {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const colRef = collection(db, "movies");
  const q = query(colRef, where("name", "==", id));

  console.log({ id });

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMoviesData(
        snapshot.docs.map((movie) => ({ ...movie.data(), id: movie.id }))
      );
    });
  }, []);

  console.log(moviesData);

  return (
    <div className="display">
      {moviesData.map((movie) => {
        return (
          <div>
            <div className="relative h-[280px] md:h-[400px] sm:h-[400px] rounded-md overflow-hidden duration-200">
              {/* {movie.createdAt && (
                <div className="absolute top-2 right-2 bg-green-800 px-4 py-1 rounded-md text-xs">
                  {date}
                </div>
              )} */}
              <img
                src={movie.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Information */}
            <div>
              <h2 className="mt-4">{movie.name}</h2>
              {/* Extra Information */}
              <div className="flex justify-between my-2 text-sm opacity-70">
                <p className="flex gap-2 items-center">
                  <BiWorld />
                  {movie.country}
                </p>
                <p className="flex gap-2 items-center">
                  <MdOutlineDateRange />
                  {movie.year}
                </p>
              </div>
              <Button />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EachMovie;

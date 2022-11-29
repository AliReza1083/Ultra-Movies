import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../utils/Add";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import Movie from "../components/Movie";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const colRef = collection(db, "movies");
  const q = query(colRef, orderBy("createdAt"));

  // ! Getting Data from Fire Store
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMoviesData(
        snapshot.docs.map((movie) => ({ ...movie.data(), id: movie.id }))
      );
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="display flex flex-col gap-8 p-4 overflow-hidden"
    >
      {/* Search box */}
      <input
        className="bg-background_2 px-4 py-2 outline-none rounded-md"
        type="search"
        placeholder="search"
      />

      {/* Movies */}
      <div className="grid grid-cols-6 gap-4 justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {moviesData.map((movie) => {
          return <Movie key={movie.id} variant={movie} />;
        })}
      </div>
    </motion.div>
  );
};

export default Movies;

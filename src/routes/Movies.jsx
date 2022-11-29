import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import Movie from "../components/Movie";

import MovieData from "../movies.json";

const Movies = () => {
  const [dataFilter, setDataFilter] = useState(MovieData);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const dataFiltering = MovieData.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    });
    setDataFilter(dataFiltering);
  }, [searchField]);

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
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="search"
      />

      {/* Movies */}
      <div className="grid grid-cols-6 gap-4 justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <AnimatePresence>
          {dataFilter.map((movie) => {
            return <Movie key={movie.id} variant={movie} />;
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Movies;

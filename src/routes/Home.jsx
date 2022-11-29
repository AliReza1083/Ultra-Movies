import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="display h-screen flex flex-col justify-center items-center gap-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [100, -10, 0] }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 100 }}
        className="text-5xl font-bold"
      >
        Welcome to <span className="text-primary">Ultra Movie</span> Website
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [100, -10, 0] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        exit={{ opacity: 0, x: 100 }}
        className="text-xl tracking-[.8em] text-center"
      >
        Where you can See lots of Movies
      </motion.p>
    </div>
  );
};

export default Home;

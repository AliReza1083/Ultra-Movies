import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import {
  Home,
  Movies,
  Date,
  Trailers,
  Add,
  Info,
  Authentication,
  Approve,
  EachMovie,
} from "./routes";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<EachMovie />}></Route>
          <Route path="date" element={<Date />}></Route>
          <Route path="trailers" element={<Trailers />}></Route>
          <Route path="add-movie" element={<Add />}></Route>
          <Route path="about" element={<Info />}></Route>
          <Route path="authentication" element={<Authentication />}></Route>
          <Route path="private/approve" element={<Approve />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home, Movies, Date, Trailers, Add, Info } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="date" element={<Date />}></Route>
        <Route path="trailers" element={<Trailers />}></Route>
        <Route path="add-movie" element={<Add />}></Route>
        <Route path="about" element={<Info />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

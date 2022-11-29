import { db } from "../utils/Add";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Add = () => {
  const colRef = collection(db, "movies");

  const addingData = (e) => {
    e.preventDefault();
    const { name, country, year, img, trailer, details } = e.target;

    addDoc(colRef, {
      name: name.value,
      country: country.value,
      year: year.valueAsNumber,
      img: img.value,
      trailer: trailer.value,
      details: details.value,
      createdAt: serverTimestamp(),
    }).then(() => {
      console.log("added");
    });
  };

  return (
    <div className="display">
      <form action="" className="text-black" onSubmit={addingData}>
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="country" placeholder="country" required />
        <input type="number" name="year" placeholder="year" required />
        <input type="url" name="img" placeholder="img" required />
        <input type="url" name="trailer" placeholder="trailer" required />
        <textarea
          name="details"
          cols="30"
          rows="10"
          placeholder="details"
          required
        ></textarea>
        <button>add</button>
      </form>
    </div>
  );
};

export default Add;

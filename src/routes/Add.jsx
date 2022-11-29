import { db } from "../utils/Add";
import { addDoc, collection } from "firebase/firestore";

const Add = () => {
  const colRef = collection(db, "movies");

  const addingData = (e) => {
    e.preventDefault();
    const createdAt = new Date();

    addDoc(colRef, {
      name: e.target.name.value,
      country: e.target.country.value,
      year: e.target.year.valueAsNumber,
      img: e.target.img.value,
      trailer: e.target.trailer.value,
      details: e.target.details.value,
      createdAt: createdAt,
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

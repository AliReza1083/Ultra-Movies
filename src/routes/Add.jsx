import { db } from "../utils/Add";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Add = () => {
  const colRef = collection(db, "approve");

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
    <div className="display h-screen sm:h-auto flex justify-center items-center lg:p-4 lg:py-8">
      <form
        action=""
        className="w-full max-w-[800px] bg-background_2 bg-opacity-[.5] p-4 rounded-xl grid grid-cols-2 gap-4 items-start sm:grid-cols-1"
        onSubmit={addingData}
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="name"
          autoComplete="off"
          required
        />
        <input
          className="input"
          type="text"
          name="country"
          placeholder="country"
          autoComplete="off"
          required
        />
        <input
          className="input"
          type="number"
          name="year"
          placeholder="year"
          autoComplete="off"
          required
        />
        <input
          className="input"
          type="url"
          name="img"
          placeholder="img"
          autoComplete="off"
          required
        />
        <input
          className="input"
          type="url"
          name="trailer"
          placeholder="trailer"
          autoComplete="off"
          required
        />
        <textarea
          className="input col-span-2 sm:col-span-1"
          name="details"
          cols="30"
          rows="10"
          placeholder="details"
          required
        ></textarea>
        <button className="bg-primary justify-self-start px-8 py-2 rounded-md text-white active:scale-95 duration-150">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

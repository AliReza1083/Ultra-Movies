import { db } from "../utils/Add";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Approve = () => {
  const [approveData, setApproveData] = useState([]);
  const colRefApprove = collection(db, "approve");
  const colRefMovie = collection(db, "movies");

  useEffect(() => {
    onSnapshot(colRefApprove, (snapshot) => {
      setApproveData(
        snapshot.docs.map((data) => ({ ...data.data(), id: data.id }))
      );
    });
  }, []);

  const addingApprovedData = (e) => {
    e.preventDefault();
    console.dir(e);
    const { name, country, year, img, trailer, details } = e.target;
    const docRef = doc(db, "approve", e.target.button.value);

    addDoc(colRefMovie, {
      name: name.value,
      country: country.value,
      year: year.valueAsNumber,
      img: img.value,
      trailer: trailer.value,
      details: details.value,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("added");
      })
      .then(() => {
        deleteDoc(docRef);
      })
      .then(() => {
        console.log("deleted");
      });
  };

  const deletingDoc = (e) => {
    const docRef = doc(db, "approve", e.target.value);
    deleteDoc(docRef).then(() => {
      console.log("Deleted");
    });
  };

  return (
    <div className="display grid grid-cols-5 p-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-4">
      {approveData.map((datas) => {
        return (
          <form
            className="flex flex-col gap-4 bg-background_2 rounded-md p-4"
            onSubmit={addingApprovedData}
          >
            <input
              className="input"
              type="text"
              name="name"
              value={datas.name}
              readOnly
            />
            <input
              className="input"
              type="text"
              name="country"
              value={datas.country}
              readOnly
            />
            <input
              className="input"
              type="number"
              name="year"
              value={datas.year}
              readOnly
            />
            <input
              className="input"
              type="url"
              name="img"
              value={datas.img}
              readOnly
            />
            <input
              className="input"
              type="url"
              name="trailer"
              value={datas.trailer}
              readOnly
            />
            <textarea
              className="input"
              name="details"
              placeholder="details"
              value={datas.details}
              readOnly
            ></textarea>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="submit"
                className="bg-green-800 py-2 rounded-md"
                name="button"
                value={datas.id}
              >
                Approved
              </button>
              <button
                type="button"
                className="bg-red-800 py-2 rounded-md"
                name="delete"
                value={datas.id}
                onClick={deletingDoc}
              >
                Remove
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
};

export default Approve;

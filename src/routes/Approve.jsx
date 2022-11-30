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

  return (
    <div className="display">
      {approveData.map((datas) => {
        return (
          <form
            action=""
            className="text-black border-4 border-red-700 p-4"
            onSubmit={addingApprovedData}
          >
            <input type="text" name="name" value={datas.name} readOnly />
            <input type="text" name="country" value={datas.country} readOnly />
            <input type="number" name="year" value={datas.year} readOnly />
            <input type="url" name="img" value={datas.img} readOnly />
            <input type="url" name="trailer" value={datas.trailer} readOnly />
            <textarea
              name="details"
              cols="30"
              rows="10"
              placeholder="details"
              value={datas.details}
              readOnly
            ></textarea>
            <button name="button" value={datas.id}>
              add
            </button>
          </form>
        );
      })}
    </div>
  );
};

export default Approve;

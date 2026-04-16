import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addDocument = async () => {
    await addDoc(collection(db, "documents"), { title, url });
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Admin</h1>
      <input placeholder="Judul" onChange={(e)=>setTitle(e.target.value)} />
      <input placeholder="URL" onChange={(e)=>setUrl(e.target.value)} />
      <button onClick={addDocument}>Tambah</button>
    </div>
  );
}

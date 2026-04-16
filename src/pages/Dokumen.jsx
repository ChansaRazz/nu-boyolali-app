import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Dokumen() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "documents"), (snap) => {
      setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <div style={{padding:"20px"}}>
      {docs.map(doc => (
        <div key={doc.id}>
          <h3>{doc.title}</h3>
          <a href={doc.url}>Download</a>
        </div>
      ))}
    </div>
  );
}

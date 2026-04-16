import { useState } from "react";
import { callGemini } from "../services/gemini";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await callGemini("Topik: " + idea, "Buat ide program organisasi");
    setResult(res);
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Generator Program</h1>
      <textarea onChange={(e)=>setIdea(e.target.value)} />
      <button onClick={generate}>Generate</button>
      <pre>{result}</pre>
    </div>
  );
}

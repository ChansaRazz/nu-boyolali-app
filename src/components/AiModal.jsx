import { useState } from "react";
import { callGemini } from "../services/gemini";

export default function AiModal({ onClose }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleAsk = async () => {
    const res = await callGemini(input, "Asisten IPNU IPPNU");
    setOutput(res);
  };

  return (
    <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{background:"#fff", padding:"20px", width:"400px"}}>
        <textarea value={input} onChange={(e)=>setInput(e.target.value)} style={{width:"100%"}} />
        <button onClick={handleAsk}>Tanya</button>
        <p>{output}</p>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
}

import { Sparkles } from "lucide-react";

export default function Navbar({ setActiveTab, setIsAiOpen }) {
  return (
    <nav style={{background:"#064e3b", color:"#fff", padding:"10px", display:"flex", justifyContent:"space-between"}}>
      <b>IPNU IPPNU Boyolali</b>
      <div style={{display:"flex", gap:"10px"}}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("dokumen")}>Dokumen</button>
        <button onClick={() => setActiveTab("admin")}>Admin</button>
        <button onClick={() => setIsAiOpen(true)}><Sparkles size={16}/> AI</button>
      </div>
    </nav>
  );
}

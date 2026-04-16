import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dokumen from "./pages/Dokumen";
import Admin from "./pages/Admin";
import AiModal from "./components/AiModal";
import useAuth from "./hooks/useAuth";

export default function App() {
  const [tab, setTab] = useState("home");
  const [aiOpen, setAiOpen] = useState(false);
  const { role } = useAuth();

  return (
    <>
      <Navbar setActiveTab={setTab} setIsAiOpen={setAiOpen} />

      {tab === "home" && <Home />}
      {tab === "dokumen" && <Dokumen />}
      {role === "admin" && tab === "admin" && <Admin />}

      {aiOpen && <AiModal onClose={() => setAiOpen(false)} />}
    </>
  );
}

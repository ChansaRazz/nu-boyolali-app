import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("user");

  useEffect(() => {
    signInAnonymously(auth);
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return { user, role };
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const callGemini = async (prompt, systemPrompt) => {
  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=" + API_KEY,
    {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      })
    }
  );
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text;
};

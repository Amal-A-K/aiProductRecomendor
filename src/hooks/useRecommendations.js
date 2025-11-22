import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { products } from "../data/products";

export default function useRecommendations() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    if (!query.trim()) return alert("Please enter a preference.");
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
        Return ONLY matching product names from this list based on this request.
        No explanation. Only product names separated by commas.

        Products:
        ${products.map((p) => `${p.name} - $${p.price}`).join(", ")}

        User Query: "${query}"
      `;

      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text().toLowerCase();

      setRecommendations(products.filter(p => aiResponse.includes(p.name.toLowerCase())));
    } catch (error) {
      console.error(error);
      alert("API Error — Try again.");
    }

    setLoading(false);
  };

  return { query, setQuery, recommendations, loading, getRecommendations };
}

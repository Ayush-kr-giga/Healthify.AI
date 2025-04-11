import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBU91pvJs_5g3zTlWHoBReWeOifrhzn1hc";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getResponse = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // ✅ correct model
    const result = await model.generateContent(prompt); // ✅ this works with latest SDK
    return result.response.text();
  } catch (err) {
    console.error("Error from Gemini API:", err);
    return "Sorry, something went wrong.";
  }
};

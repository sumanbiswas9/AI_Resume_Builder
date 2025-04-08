// src/services/geminiService.ts
// WARNING: Storing API keys directly in client-side code is insecure!
// This key will be visible in your browser's network requests.
// For production, use a backend proxy to handle API calls securely.
const API_KEY = import.meta.env.GEMINI_API_KEY; // Replace with your actual key
const MODEL_NAME = "gemini-1.5-flash"; // Use a valid model name
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

export async function generateGeminiResponse(prompt) {
  if (!prompt) {
    throw new Error("Prompt cannot be empty.");
  }
  if (!API_KEY) {
    console.error("API Key is missing or placeholder is used. Please add your Gemini API key in src/services/geminiService.ts");
    throw new Error("API key is missing or invalid.");
  }

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    // Optional: Add generationConfig or safetySettings here if needed
    // generationConfig: { temperature: 0.7, topP: 1.0 },
    // safetySettings: [ ... ]
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error Response:", data);
      throw new Error(data?.error?.message || `API Error: ${response.status} ${response.statusText}`);
    }

    // Access the text based on the Gemini API response structure
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("No text found in API response:", data);
      throw new Error("No text content found in the API response.");
    }

    return text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Re-throw the error or return a specific error message
    if (error instanceof Error) {
      throw new Error(`Failed to get response from AI: ${error.message}`);
    }
    throw new Error("An unknown error occurred while contacting the AI.");
  }
}
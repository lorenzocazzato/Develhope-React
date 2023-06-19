import React, { useContext } from "react";
import { createContext } from "react";

export const LanguageContext = createContext("en");

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>Selected Language: {language}</h1>
    </div>
  );
}

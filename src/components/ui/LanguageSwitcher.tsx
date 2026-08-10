import { useState } from "react";
import Button from "./Button";

export default function LanguageSwitcher() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <Button variant="secondary" size="sm" onClick={toggleLanguage}>
      {isEnglish ? "English" : "العربية"}
    </Button>
  );
}

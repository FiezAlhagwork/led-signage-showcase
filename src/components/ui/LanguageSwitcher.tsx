import { useState } from 'react';
import Button from './Button'; // استدعاء مكون الزر العام الخاص بك

export default function LanguageSwitcher() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    // هنا تقوم باستدعاء دالة تغيير اللغة في مشروعك، مثلاً:
    // i18n.changeLanguage(isEnglish ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="secondary" 
      size="sm" 
      onClick={toggleLanguage}
    >
      {isEnglish ? "English" : "العربية"}
    </Button>
  );
}
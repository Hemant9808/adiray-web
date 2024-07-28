import  { useState, useEffect } from 'react';

type LanguageSelectHandler = (language: string) => void;

interface MultiLangProps {
  onSelectLanguage: LanguageSelectHandler; // Assign the type to onSelectLanguage
}

export default function MultiLang({ onSelectLanguage }: MultiLangProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      onSelectLanguage(storedLanguage);
    }
  }, [onSelectLanguage]);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    sessionStorage.setItem('language', language);
    onSelectLanguage(language);
  };

  return (
    <div className='w-[100%] h-screen flex justify-center items-center '>
      <div className="w-[80%] max-w-[400px] h-[300px] shadow-md bg-gray-200 p-5 rounded-md flex flex-col justify-center items-center gap-12">
        <h2 className='md:text-3xl font-bold text-xl '>Select Your Language</h2>
        <div className='flex gap-12'>
          <button
            className={`md:text-xl text-md font-semibold bg-blue-600 font-Mont rounded-lg p-3 text-white hover:scale-110 transition duration-200 ${selectedLanguage === 'en' ? 'bg-blue-800' : ''}`}
            onClick={() => handleLanguageSelect('en')}
          >
            English
          </button>
          <button
            className={`md:text-xl text-md font-semibold bg-blue-600 font-Mont rounded-lg p-3 text-white hover:scale-110 transition duration-200 ${selectedLanguage === 'hi' ? 'bg-blue-800' : ''}`}
            onClick={() => handleLanguageSelect('hi')}
          >
            Hindi
          </button>
        </div>
        {/* Add more language buttons as needed */}
      </div>
    </div>
  );
}
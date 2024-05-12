import { LanguageIcon } from '@heroicons/react/16/solid';
import React from 'react'
import { useState } from 'react';
type LanguageSelectHandler = (language: string) => void;
interface MultiLangProps {
  onSelectLanguage: LanguageSelectHandler; // Assign the type to onSelectLanguage
}
export default function MultiLang({onSelectLanguage}: MultiLangProps) {
  
     
  const handleLanguageSelect = (language: string) => {
    onSelectLanguage(language);};
  return (
   
   
    <div className='w-[100%] h-screen  flex justify-center items-center '>
       <div className="w-[80%] max-w-[400px] h-[300px] shadow-md bg-gray-200  p-5 rounded-md flex flex-col justify-center  items-center gap-12">
      <h2 className='text-3xl font-bold '>Select Your Language</h2>
      <div className='flex gap-12'><button className='text-xl font-semibold bg-blue-600 font-Mont rounded-lg p-3 text-white hover:scale-110 transition duration-200 ' onClick={() => handleLanguageSelect('en')}>English</button>
      <button className='text-xl font-semibold bg-blue-600 font-Mont rounded-lg p-3 text-white hover:scale-110 transition duration-200' onClick={() => handleLanguageSelect('he')}>Hindi</button>
     </div>
       {/* Add more language buttons as needed */}
    </div>
    </div>
  )
}

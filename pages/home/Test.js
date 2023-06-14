import React from 'react'
import i18n from "../../i18n/index";
import { useTranslation } from 'next-i18next';
import { useState,useEffect } from "react";
      
export default function Test() {

const { t } = useTranslation();
const [selectedLanguage, setSelectedLanguage] =  useState(i18n.language);
const handleChangeLanguage = (e) => {
    e.preventDefault();
      i18n.changeLanguage(e.target.value);
      setSelectedLanguage(e.target.value);   
};

return (
    <div>
      <select defaultValue={selectedLanguage} onChange={handleChangeLanguage}
      className="block w-full py-2 px-3 bg-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 	border-color: inherit "
       >
       <option  value="fr">French</option>
        <option  value="en">English</option>
      </select>
      <div>
      <p>{t('welcome')}</p>
      </div>
    </div>
        )
}
      
import React from 'react';
import Link from "next/link";
import { useTranslation } from 'next-i18next';
const NavigationItem = ({ name, active, onItemClick,route}) => {
  const { t } = useTranslation();
  const handleClick = () => {
    onItemClick(name);
    localStorage.setItem('navItem', name);
  };

  return (
    <Link href={route} className={`mx-3 h6 ${active ? 'text-pink' : ''}`} onClick={handleClick}>
      <p className="">
        {name=='Home'? t('Home'):
        name=='About'? t('About'):
        name=='Services'? t('Services'):
        name=='Contact'? t('Contact'):''
        }
      </p>
    </Link>
  );
};

export default NavigationItem;

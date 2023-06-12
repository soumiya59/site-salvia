import React from 'react';
import Link from "next/link";
const NavigationItem = ({ name, active, onItemClick,route }) => {
  const handleClick = () => {
    onItemClick(name);
    localStorage.setItem('navItem', name);
  };


  return (
            <Link href={route} className={`mx-3 h6 ${active ? 'text-pink' : ''}`} onClick={handleClick}>
              <p className=""> {name} </p>
            </Link>
    // <div
    //   className={`navigation-item ${active ? 'active' : ''}`}
    //   onClick={handleClick}
    // >
    //   {name}
    // </div>
  );
};

export default NavigationItem;

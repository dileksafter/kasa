import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../styles/Cards.sass'
import galleryItems from '../assets/gallery.json'

const Cards = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.screen.width <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="cards">
      {galleryItems.filter((item,index) => index < (isMobile ? 3 : 6) ).map((item) => (
        <div className="card">
          <Link to={`/cards/${item.id}`}>
            <img src={item.cover} className="cardImg" alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Cards
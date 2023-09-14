import React, { useState, useEffect } from 'react';

const StarField = () => {
  const [stars, setStars] = useState([]);
  const speed = 0.3;

  useEffect(() => {
    const createStars = () => {
      const newStars = [];
      for (let i = 0; i < 20; i++) {
        newStars.push(new Star(speed));
      }
      return newStars;
    };

    const stars = createStars();
    setStars(stars);

    const animate = () => {
      setStars(prevStars => {
        const updatedStars = prevStars.map(star => {
          star.update();
          return star;
        });
        return updatedStars;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="star-field">
      {stars.map((star, index) => (
        <div key={index} className="star" style={star.getStyle()}></div>
      ))}
    </div>
  );
};

class Star {
  constructor(speed) {
    this.x = Math.random() * window.innerWidth - window.innerWidth / 2;
    this.y = Math.random() * window.innerHeight - window.innerHeight / 2;
    this.z = Math.random() * window.innerWidth;
    this.speed = speed;
  }

  update() {
    this.z = this.z - this.speed;
    if (this.z < 1) {
      this.x = Math.random() * window.innerWidth - window.innerWidth / 2;
      this.y = Math.random() * window.innerHeight - window.innerHeight / 2;
      this.z = window.innerWidth;
    }
  }

  getStyle() {
    const sx =
      ((this.x / this.z) * window.innerWidth) / 2 + window.innerWidth / 2;
    const sy =
      ((this.y / this.z) * window.innerHeight) / 2 + window.innerHeight / 2;

    let r;
    if (window.innerWidth <= 1023) {
      r = (window.innerWidth - this.z) / 150; // Размер звезд для ширины до 1024px
    } else {
      r = (window.innerWidth - this.z) / 300; // Уменьшенный размер звезд для ширины более 1024px
    }

    const boxShadow = `0 0 ${r * 2}px rgba(173, 216, 230, 0.6)`; // Создаем внешний свечение

    const style = {
      left: `${sx}px`,
      top: `${sy}px`,
      width: `${r}px`,
      height: `${r}px`,
      backgroundColor: 'rgba(173, 216, 230, 0.8)', // Цвет звезды
      borderRadius: '50%',
      position: 'absolute',
      boxShadow: boxShadow, // Применяем свечение
    };
    return style;
  }
}

export default StarField;

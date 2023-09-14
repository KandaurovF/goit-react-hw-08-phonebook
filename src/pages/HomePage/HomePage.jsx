import React from 'react';
import StarField from '../../components/StarField/StarField';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.spaceBackground}>
      <div className={css.content}>HomePage</div>
      <StarField />
    </div>
  );
};

export default HomePage;

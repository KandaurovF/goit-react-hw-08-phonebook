import React from 'react';
import StarField from '../../components/StarField/StarField';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.spaceBackground}>
      <div className={css.content}>HomePage</div>
      <StarField />
      <div className={css.homePageDescr}>
        <h1 className={css.homePageDescrTitle}>Welcome to our app!</h1>
        <p className={css.descr}>
          Here, you will always have access to your contacts, no matter the
          situation. Manage your contacts easily and conveniently, stay in touch
          with friends and loved ones anytime. Start using our app now and
          always stay connected!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import IconButton from 'components/IconButton';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal';
import React, { useEffect, useState } from 'react';
import { ImUserPlus } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contactsReducer';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <div className={css.spaceBackground}>
      <div className={css.container}>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm closeModal={toggleModal} />
          </Modal>
        )}

        <div className="contacts__header">
          <h2 className={css.heading}>Contacts</h2>

          <IconButton onClick={toggleModal} aria-label="Add contact">
            <ImUserPlus size={26} fill="#00ff00" />
          </IconButton>
        </div>

        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
        {/* <div className="contacts-container">
          {isLoading && !error && <Loader />}
          <ContactList /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactsPage;

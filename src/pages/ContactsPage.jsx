// import React, { useEffect, useState } from 'react';
// import ContactForm from '../components/ContactForm';
// import ContactList from '../components/ContactList';
// import Filter from '../components/Filter';
// import IconButton from '../components/IconButton';
// import Modal from '../components/Modal';
// import { ImUserPlus } from 'react-icons/im';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchContacts } from '../redux/contacts/API';
// // import { selectError, selectIsLoading } from '../redux/contacts/contactsSlice';
// import Loader from '../components/Loader';
// import {
//   selectContactsError,
//   selectContactsIsLoading,
// } from 'redux/contactsReducer';

// export const ContactPage = () => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const isLoading = useSelector(selectContactsIsLoading);
//   const error = useSelector(selectContactsError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="wrapper">
//       <h1 className="main__heading">Phonebook</h1>
//       <div className="container">
//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <ContactForm closeModal={toggleModal} />
//           </Modal>
//         )}

//         <div className="contacts__header">
//           <h2 className="secondary__heading">Contacts</h2>
//           <IconButton onClick={toggleModal} aria-label="Add contact">
//             <ImUserPlus size={20} fill="#000" />
//           </IconButton>
//         </div>

//         <Filter />
//         {isLoading && !error && <Loader />}
//         <ContactList />
//       </div>
//     </div>
//   );
// };

import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
// import imgFavicon from '../images/favicon-32x32.png';
import {
  addContact,
  deleteContact,
  requestContacts,
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contactsReducer';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    dispatch(addContact(formData));
    event.currentTarget.reset();
  };

  const handleDeleteContact = contacId => {
    dispatch(deleteContact(contacId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href={imgFavicon}></link>
        <title>Contacts</title>
      </Helmet> */}
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input type="text" name="contactName" required minLength={2} />
        </label>
        <label>
          <p>Number:</p>
          <input type="text" name="contactNumber" required minLength={6} />
        </label>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      <ul>
        {showContacts &&
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              <h3>
                Name: {name}{' '}
                <button onClick={() => handleDeleteContact(id)}>&times;</button>
              </h3>
              <p>
                Phone number: <b>{number}</b>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;

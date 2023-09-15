import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsReducer';
// import { selectContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsReducer';
// import { deleteContact } from 'redux/contacts/API';
import css from './ContactList.module.css';
import { Confirm } from 'notiflix';

const ContactList = () => {
  const dispathc = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  const renderedContacts = contactsFilter === '' ? contacts : filteredContacts;

  const handleDelete = id =>
    Confirm.show(
      'This will delete the contact',
      'Are you sure?',
      'Yes',
      'No',
      () => {
        dispathc(deleteContact(id));
      },
      () => {
        return;
      },
      {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: '10px',
        fontFamily: 'Orbitron',
        titleColor: '#00ff00',
        messageColor: '#008800',
        okButtonColor: '#00ff00',
        okButtonBackground: 'rgba(0, 255, 0, 0.4)',
        cancelButtonColor: '#00ff00',
        cancelButtonBackground: 'transparent',
      }
    );

  return (
    <div className={css.cardsListContainer}>
      <ul className={`${css.cardsList} list`}>
        {renderedContacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <li className={css.card} key={id}>
              <div className={css.contactInfo}>
                <p>{`${name}`}</p>
                <p>{`${number}`}</p>
              </div>

              <button
                className={css.contactDelBtn}
                onClick={() => handleDelete(id)}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

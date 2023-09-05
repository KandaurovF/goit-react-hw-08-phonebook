import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/contactsSlice';
import { selectFilter } from 'components/redux/filterSlice';
import { deleteContact } from 'components/redux/contacts/API';
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
      }
    );

  return (
    <ul className={`${css.cardsList} list`}>
      {renderedContacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li className={css.card} key={id}>
            <div className={css.contactInfo}>
              <p>{`${name}`}</p>
              <p>{`${number}`}</p>
            </div>

            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

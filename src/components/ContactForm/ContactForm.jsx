import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { INITIAL_VALUES, schema } from './Config';
import { selectContacts } from 'components/redux/contacts/contactsSlice';
import { addContact } from 'components/redux/contacts/API';
import css from './ContactForm.module.css';

const ContactForm = ({ closeModal }) => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onAddContact = newContact => {
    const includesContact = contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length;

    if (includesContact) {
      return Notify.failure(`${newContact.name}: is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    Notify.success(
      `${newContact.name} was successfully added to your contacts`
    );
  };

  const hendleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values });

    resetForm();
    closeModal();
  };

  return (
    <>
      <h2 className={css.form__heading}>Add contact</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={inputNameId}>
            <Field
              className={css.input}
              name="name"
              id={inputNameId}
              type="text"
              placeholder=" "
            />
            <span>Name</span>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="p"
            />
          </label>

          <label className={css.label} htmlFor={inputNumberId}>
            <Field
              className={css.input}
              name="number"
              id={inputNumberId}
              type="tel"
              placeholder=" "
            />
            <span>Number</span>
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="p"
            />
          </label>
          <button className={css.addContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

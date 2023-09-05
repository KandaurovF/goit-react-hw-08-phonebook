import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/contactsSlice';
import { selectFilter, setFilter } from 'components/redux/filterSlice';
// import PropTypes from 'prop-types';
import { RiSearchLine } from 'react-icons/ri';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  return (
    <div className={css.searchbar__wrapper}>
      <RiSearchLine className={css.search__icon} />
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder={`Search contact from ${contacts.length} contacts`}
        className={css.searchInput}
      />
    </div>
  );
};

// Filter.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;

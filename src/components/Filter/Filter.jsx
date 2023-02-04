import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter.slice';

import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const searchedContact = event.target.value.trim().toLowerCase();
    // setFilter(searchedContact);
    dispatch(changeFilter(searchedContact));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

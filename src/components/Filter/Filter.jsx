import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, searchContact }) => (
  <>
    <h3 className={css.title}>Find contacts by name</h3>
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={searchContact}
      placeholder="Enter contact name..."
    />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};

import React from 'react';
import FilterLink from '../../containers/FilterLink';

const Footer = () => (
  <div>
    <p>
      {'Show: '}
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      {' or '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  </div>
);

export default Footer;

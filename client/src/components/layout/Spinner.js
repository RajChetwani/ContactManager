import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '50px', marginTop: '50px',marginLeft:'150px', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
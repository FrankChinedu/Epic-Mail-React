import React, { Fragment } from 'react';

const EmptyMessage = ({ message }) => (
  <Fragment>
    <div className="main-flex message-list">
      <article className="col-10 mail-body center-text">{message}</article>
    </div>
  </Fragment>
);

export default EmptyMessage;

import React, { Fragment } from 'react';
import { formatDate } from '../../utils';

const Template = ({ message }) => (
  <Fragment>
    <div className="main-flex message-list">
      <span className="col-3 flex">
        <span className="arrow-cover flex">
          <i className="fas fa-arrow-circle-right arrow mr-25" />
          <i className="fas fa-bookmark dark-col ml-25" />
        </span>
        <span className="col-10 mail-head draft-t">DRAFT</span>
      </span>
      <article className="col-7 mail-body">{message.message}</article>
      <span className="col-2 flex justify-content-sb">
        <span className="col-2 center-text start-text" title="delete">
          <i className="fas fa-trash delete" />
        </span>
        <span className="col-8 center-text start-text">{formatDate(message.createdon)}</span>
      </span>
    </div>
  </Fragment>
);

export default Template;

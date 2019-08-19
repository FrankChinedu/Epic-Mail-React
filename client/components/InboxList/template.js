import React, { Fragment } from 'react';
import { formatDate } from '../../utils';

const Template = ({ message, handleDeleteInbox }) => {
  const isRead = (read) => {
    if (read) {
      return 'fas fa-check read';
    }
    return 'fas fa-check unread';
  };

  const readTitle = (read) => {
    if (read) {
      return 'read Message';
    }
    return 'UnRead Message';
  };

  const deleteInbox = (id) => {
    const confirmed = confirm('Are You sure you want to delete this message');
    if (confirmed) {
      handleDeleteInbox(id);
    }
  };

  return (
    <Fragment>
      <div className="main-flex message-list">
        <span className="col-3 flex">
          <span className="arrow-cover flex">
            <i className="fas fa-arrow-circle-right arrow mr-25" />
            <i className="fas fa-inbox dark-col ml-25" />
          </span>
          <span className="col-9 mail-head">
            {message.firstname} {message.lastname}
          </span>
        </span>
        <article className="col-7 mail-body">{message.subject}</article>
        <span className="col-2 flex justify-content-sb">
          <span
            className="col-2 center-text start-text"
            title="delete"
            onClick={() => deleteInbox(message.id)}
          >
            <i className="fas fa-trash delete" />
          </span>
          <span className="col-2 center-text start-text" title={readTitle(message.read)}>
            <i className={isRead(message.read)} />
          </span>
          <span className="col-8 center-text start-text">{formatDate(message.createdon)} </span>
        </span>
      </div>
    </Fragment>
  );
};

export default Template;

import React, { Fragment } from 'react';
import { formatDate } from '../../utils';

const Template = ({ message, handleDeleteSent }) => {
  const deleteSent = (id) => {
    const confirmed = confirm('Are You sure you want to delete this message');
    if (confirmed) {
      handleDeleteSent(id);
    }
  };
  return (
    <Fragment>
      <div className="main-flex message-list">
        <span className="col-3 flex">
          <span className="arrow-cover flex">
            <i className="fas fa-arrow-circle-right arrow mr-25" />
            <i className="fas fa-exclamation-triangle ml-25 danger-col" title="retracted Message" />
          </span>
          <span className="col-9 mail-head draft-t">
						To :{message.firstname} {message.lastname}
          </span>
        </span>
        <article className="col-7 mail-body">{message.message}</article>
        <span className="col-2 flex justify-content-sb">
          <span
            className="col-2 center-text start-text"
            title="delete"
            onClick={() => deleteSent(message.id)}
          >
            <i className="fas fa-trash delete" />
          </span>
          <span className="col-2 center-text start-text retracted" title="ReSend Message">
            <i className="fas fa-share-square" />
          </span>
          <span className="col-6 center-text start-text">{formatDate(message.createdon)}</span>
        </span>
      </div>
    </Fragment>
  );
};

export default Template;

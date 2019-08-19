import React, { Fragment } from 'react';
import RightSide from '../../components/rightSide';

const Message = () => (
  <Fragment>
    <RightSide>
      <div>
        <span className="go-back" onClick="goBack('readMail', 'inbox')">
          <i className="fas fa-arrow-left" />
        </span>
        <span className="tag">
          <i className="fas fa-inbox mr-5 dark-col" />Inbox
        </span>
      </div>
      <div className="read-mailContent">
        <div className="flex">
          <h2>$subject</h2> <span />
        </div>
        <div>
          <div className="flex">
            <span>From: &nbsp; </span>
            <b>$email</b>
          </div>
          <div className="flex">
            <span>To: &nbsp; </span>
            <b>me</b>
          </div>
        </div>
        <div className="mailContent">inbox messgae</div>

        <div className="mt-25">
          <button className="btn btn-sm btn-default">Reply</button>
        </div>
      </div>
    </RightSide>
  </Fragment>
);

export default Message;

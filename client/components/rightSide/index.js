import React, { Fragment } from 'react';

const RightSide = ({ children }) => (
  <Fragment>
    <div className="col-10 right-aside">
      <div className="space-100" />
      <div className="right-in-main flex">
        <div className="col-11 message-body">{children}</div>
      </div>
    </div>
  </Fragment>
);

export default RightSide;

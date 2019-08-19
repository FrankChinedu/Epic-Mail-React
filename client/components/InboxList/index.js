import React, { Fragment } from 'react';
import Template from './template';

const Listmessage = ({ messages, handleDeleteInbox }) => {
  const list = messages.map(message => (
    <Template key={message.id} message={message} handleDeleteInbox={handleDeleteInbox} />
  ));

  return <Fragment>{list}</Fragment>;
};

export default Listmessage;

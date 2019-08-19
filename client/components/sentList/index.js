import React, { Fragment } from 'react';
import Template from './template';

const Listmessage = ({ messages, handleDeleteSent }) => {
  const list = messages.map(message => (
    <Template key={message.id} message={message} handleDeleteSent={handleDeleteSent} />
  ));

  return <Fragment>{list}</Fragment>;
};

export default Listmessage;

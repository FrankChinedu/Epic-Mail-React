import React, { Fragment } from 'react';
import Template from './template';

const Listmessage = ({ messages, handleDeleteDraft }) => {
  const list = messages.map(message => (
    <Template key={message.id} message={message} handleDeleteDraft={handleDeleteDraft} />
  ));

  return <Fragment>{list}</Fragment>;
};

export default Listmessage;

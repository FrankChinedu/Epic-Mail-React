import React, { Fragment } from 'react';
import Template from './template';

const Listmessage = ({ messages }) => {
  const list = messages.map(message => <Template key={message.id} message={message} />);

  return <Fragment>{list}</Fragment>;
};

export default Listmessage;

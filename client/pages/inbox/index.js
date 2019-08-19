import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import RightSide from '../../components/rightSide';
import EmptyMessage from '../../components/emptyMessage';
import { getInboxActions, deleteInboxMessage } from '../../store/actions/InboxActions';
import Listmessage from '../../components/InboxList';

const Inbox = ({
  getInbox, inbox, setInbox, handleInboxDelete
}) => {
  useEffect(
    () => {
      if (!setInbox) {
        getInbox();
      }
    },
    [setInbox]
  );

  const handleDeleteInbox = (id) => {
    handleInboxDelete(id);
  };

  const showMessage = inbox.length ? (
    <Listmessage messages={inbox} handleDeleteInbox={handleDeleteInbox} />
  ) : (
    <EmptyMessage message={'Inbox Is Empty until you have new Messages....'} />
  );

  return (
    <Fragment>
      <RightSide>{showMessage}</RightSide>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sentStatus: state.sendMessage.success,
  inbox: state.inboxReducer.inbox,
  setInbox: state.inboxReducer.setInbox
});

const mapDispatchToProps = {
  getInbox: () => getInboxActions(),
  handleInboxDelete: id => deleteInboxMessage(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);

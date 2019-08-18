import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import RightSide from '../../components/rightSide';
import EmptyMessage from '../../components/emptyMessage';
import { getInboxActions } from '../../store/actions/InboxActions';
import Listmessage from '../../components/InboxList';

const Inbox = ({ getInbox, inbox, setInbox }) => {
  useEffect(
    () => {
      if (!setInbox) {
        getInbox();
      }
    },
    [setInbox]
  );

  const showMessage = inbox.length ? (
    <Listmessage messages={inbox} />
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
  getInbox: () => getInboxActions()
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);

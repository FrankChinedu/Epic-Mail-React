import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import RightSide from '../../components/rightSide';
import { getSentActions, handleSentDeleteActions } from '../../store/actions/sentActions';
import EmptyMessage from '../../components/emptyMessage';
import ListMessage from '../../components/sentList';

const Sent = ({
  sent, setSent, getSent, handleSentDelete
}) => {
  useEffect(
    () => {
      if (!setSent) {
        getSent();
      }
    },
    [setSent]
  );
  const handleDeleteSent = (id) => {
    handleSentDelete(id);
  };

  const showMessage = sent.length ? (
    <ListMessage messages={sent} handleDeleteSent={handleDeleteSent} />
  ) : (
    <EmptyMessage message={'Sent Box Is Empty until you send some Messages to friends....'} />
  );
  return (
    <Fragment>
      <RightSide>{showMessage}</RightSide>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sent: state.SentReducer.sent,
  setSent: state.SentReducer.setSent
});

const mapDispatchToProps = {
  getSent: () => getSentActions(),
  handleSentDelete: id => handleSentDeleteActions(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Sent);

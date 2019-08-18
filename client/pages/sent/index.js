import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import RightSide from '../../components/rightSide';
import { getSentActions } from '../../store/actions/sentActions';
import EmptyMessage from '../../components/emptyMessage';
import ListMessage from '../../components/sentList';

const Sent = ({ sent, setSent, getSent }) => {
  useEffect(
    () => {
      if (!setSent) {
        getSent();
      }
    },
    [setSent]
  );

  const showMessage = sent.length ? (
    <ListMessage messages={sent} />
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
  getSent: () => getSentActions()
};

export default connect(mapStateToProps, mapDispatchToProps)(Sent);

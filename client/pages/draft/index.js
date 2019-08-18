import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getDraftActions } from '../../store/actions/draftActions';
import RightSide from '../../components/rightSide';
import EmptyMessage from '../../components/emptyMessage';
import Listmessage from '../../components/draftList';

const Draft = ({ draft, setDraft, getDraft }) => {
  useEffect(
    () => {
      if (!setDraft) {
        getDraft();
      }
    },
    [setDraft]
  );

  const showMessage = draft.length ? (
    <Listmessage messages={draft} />
  ) : (
    <EmptyMessage message={'Draft Box Is Empty until you save some Messages as draft....'} />
  );
  return (
    <Fragment>
      <RightSide>{showMessage}</RightSide>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  draft: state.DraftReducer.draft,
  setDraft: state.DraftReducer.setDraft
});

const mapDispatchToProps = {
  getDraft: () => getDraftActions()
};

export default connect(mapStateToProps, mapDispatchToProps)(Draft);

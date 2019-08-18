import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { sendMessageAction } from '../../store/actions/sendMessage';
import toast from '../Toast';

const CreateMessage = ({ compose, sendMail, sentStatus }) => {
  const initValues = {
    recieversEmail: '',
    subject: '',
    message: '',
    status: ''
  };
  const [values, setValues] = useState(initValues);

  useEffect(
    () => {
      if (sentStatus) {
        setValues({ ...initValues });
      }
    },
    [sentStatus]
  );

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const send = (e) => {
    e.preventDefault();
    values.status = 'sent';
    sendMail(values);
  };

  const saveDraft = () => {
    if (!values.subject && !values.message) {
      toast('subject or body cannot be empty', 'error');
      return;
    }
    values.status = 'draft';
    sendMail(values);
  };
  return (
    <div className="email-body">
      <div className="email-header flex align-item-center justify-content-sb">
        <p>New Message</p>
        <span onClick={compose}>X</span>
      </div>
      <div className="email-main-body">
        <form onSubmit={send}>
          <input
            type="email"
            id="receipient"
            className="form-ctrl pt-25"
            required
            autoComplete="off"
            placeholder="Receipient"
            name="recieversEmail"
            onChange={onChange}
            pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
            title="must be a valid email"
            value={values.recieversEmail}
          />
          <input
            type="text"
            id="subject"
            className="form-ctrl mt-25"
            required
            autoComplete="off"
            placeholder="Subject"
            name="subject"
            onChange={onChange}
            value={values.subject}
          />
          <div>
            <textarea
              id="text-area"
              className="form-ctrl mt-25"
              required
              cols="30"
              placeholder="Message Here"
              rows="10"
              name="message"
              onChange={onChange}
              value={values.message}
            />
          </div>
          <div className="mt-25 flex justify-content-sb ">
            <button type="submit" className="btn btn-success" title="send message to user">
							Send
            </button>
            <button
              type="button"
              className=" btn btn-default"
              title="Saves message as draft"
              onClick={saveDraft}
            >
							Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sentStatus: state.sendMessage.success
});

const mapDispatchToProps = {
  sendMail: (values, history, path) => sendMessageAction(values, history, path)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

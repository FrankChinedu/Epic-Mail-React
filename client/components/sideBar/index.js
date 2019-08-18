import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CreateMessage from '../createMessage';

const SideBar = () => {
  const [create, setCreate] = useState(false);
  const compose = () => {
    setCreate(!create);
  };
  return (
    <Fragment>
      <div className="col-2 left-aside">
        <div className="space-100 compose-container">
          <button className="btn compose" onClick={compose}>
						compose
          </button>
        </div>
        <div className="left-side-panel">
          <ul>
            <li className="inbox-active listForJs" role="li" id="inbox">
              <NavLink to="/inbox">
                <i className="fas fa-inbox mr-5 dark-col" />&nbsp;&nbsp;&nbsp;Inbox
              </NavLink>
            </li>
            <li className=" listForJs" id="draft">
              <NavLink to="/draft">
                <i className="fas fa-bookmark mr-5 dark-col" /> &nbsp;&nbsp;&nbsp;Draft
              </NavLink>
            </li>
            <li className="listForJs" id="sent">
              <NavLink to="/sent">
                <i className="fas fa-plane-departure mr-5 dark-col" /> &nbsp;Sent
              </NavLink>
            </li>
            <li className=" listForJs" id="contact">
              <a href="#">
                <i className="fas fa-address-book mr-5 dark-col" />&nbsp;&nbsp;&nbsp;Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      {create ? <CreateMessage compose={compose} /> : ''}
    </Fragment>
  );
};

export default SideBar;

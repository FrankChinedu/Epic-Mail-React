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
          <button className="btn compose" onClick={compose} style={{ borderRadius: '30px' }}>
						compose
          </button>
        </div>
        <div className="left-side-panel">
          <ul>
            <NavLink to="/inbox">
              <li className="inbox-active listForJs" role="li" id="inbox">
                <span>
                  <i className="fas fa-inbox mr-5 dark-col" />&nbsp;&nbsp;&nbsp;Inbox
                </span>
              </li>
            </NavLink>
            <NavLink to="/draft">
              <li className=" listForJs" id="draft">
                <span>
                  <i className="fas fa-bookmark mr-5 dark-col" /> &nbsp;&nbsp;&nbsp;Draft
                </span>
              </li>
            </NavLink>
            <NavLink to="/sent">
              <li className="listForJs" id="sent">
                <span to="/sent">
                  <i className="fas fa-plane-departure mr-5 dark-col" /> &nbsp;Sent
                </span>
              </li>
            </NavLink>
            <a href="#">
              <li className=" listForJs" id="contact">
                <span href="#">
                  <i className="fas fa-address-book mr-5 dark-col" />&nbsp;&nbsp;&nbsp;Contacts
                </span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      {create ? <CreateMessage compose={compose} /> : ''}
    </Fragment>
  );
};

export default SideBar;

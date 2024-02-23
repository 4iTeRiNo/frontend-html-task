import { Component } from 'react';
import './popup.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from '../../assets/avatar.png';

const routes = [
  { title: 'View Profile', path: '/View Profile' },
  { title: 'Manage subscriptions', path: '/Manage subscriptions' },
  { title: 'View history', path: '/View history' },
];

const bottomRoutes = [
  { title: 'Logout', icon: 'fa-solid fa-right-to-bracket', path: '/' },
];

export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      isActive: false,
      title: null,
    };
  }
  render() {
    const id = 1;
    const name = 'John';
    const surname = 'Wick';

    return (
      <div className="popup">
        <div className="userFlex" key={id}>
          <div className="userInfoBlock">
            <img width="60px" height="60px" src={avatar} />
            <div className="userDetails">
              <span>User Account</span>
              <span>
                {name} {surname}
              </span>
            </div>
          </div>
        </div>
        <div className="mainLinks">
          {routes.map((route) => (
            <div
              className={classnames('link', 'animation')}
              key={route.title}
              onClick={(e) => {
                e.preventDefault();
                this.activeLink(route.title);
                this.goToRoute(route.path);
              }}
            >
              <span>{route.title}</span>
            </div>
          ))}
          <div className={classnames('bottomLinks')}>
            {bottomRoutes.map((route) => (
              <div
                key={route.title}
                className={classnames('link')}
                onClick={(e) => {
                  e.preventDefault();
                  this.activeLink(route.title);
                  this.goToRoute(route.path);
                }}
              >
                <span>{route.title}</span>
                <FontAwesomeIcon icon={route.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

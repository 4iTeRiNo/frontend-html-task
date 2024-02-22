import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const user = [
  {
    id: 1,
    avatar: avatar,
    email: 'Ablent1990@teleworm.us',
    name: 'John',
    sername: 'Wick',
  },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const width = 32;
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const logoFlex = classnames('logoFlex');
    const mainLinks = classnames('mainLinks');
    const bottomLinks = classnames('bottomLinks');

    return (
      <div className={containerClassnames}>
        <div className={logoFlex}>
          <img width={`${width}px`} src={logo} alt="TensorFlow logo" />
          <span>TensorFlow</span>
          <button className="btn" onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
          </button>
        </div>

        <div className={mainLinks}>
          {routes.map((route) => (
            <div
              className="link"
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>

        <div className={bottomLinks}>
          {bottomRoutes.map((route) => (
            <div
              className="link"
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>
        <div className="userPop">
          {user.map((user) => (
            <div className="userFlex" key={user.id}>
              <div className="userInfoBlock">
                <img width="60px" src={user.avatar} />
                <div className="userDetails">
                  <span>User Account</span>
                  <span>
                    {user.name} {user.sername}
                  </span>
                </div>
              </div>
              <button className="buttonShowPopup">
                <FontAwesomeIcon icon={'fa-sliders'} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

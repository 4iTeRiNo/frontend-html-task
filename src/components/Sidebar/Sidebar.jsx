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
      isActive: false,
      title: null,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  activeLink = (title) => {
    this.setState({ title: title });
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened, title } = this.state;
    const width = 32;

    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const logoFlex = 'logoFlex';
    const flexLinks = classnames('flexLinks');
    console.log(title);

    return (
      <div className={containerClassnames}>
        <div className={logoFlex}>
          <img width={`${width}px`} src={logo} alt="TensorFlow logo" />
          <span>TensorFlow</span>
          <button className="btn" onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
          </button>
        </div>

        <div className={classnames('mainLinks', { flexLinks })}>
          {routes.map((route) => (
            <div
              className={classnames('link', {
                ['active']: title === route.title,
              })}
              key={route.title}
              onClick={(e) => {
                e.preventDefault();
                this.activeLink(route.title);
                this.goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>

        <div className={classnames('bottomLinks', { flexLinks })}>
          {bottomRoutes.map((route) => (
            <div
              key={route.title}
              className={classnames('link', {
                ['active']: title === route.title,
              })}
              onClick={(e) => {
                e.preventDefault();
                this.activeLink(route.title);
                this.goToRoute(route.path);
              }}
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
                <img width="60px" height="60px" src={user.avatar} />
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

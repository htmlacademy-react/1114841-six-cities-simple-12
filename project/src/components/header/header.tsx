import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AuthorizationStatus } from '../../common/const';
import { useAppSelector } from '../../hooks/index';


function Header(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link to={'/'} className="header__nav-link" >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      :
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={'/'} className="header__nav-link header__nav-link--profile" >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}


export default Header;

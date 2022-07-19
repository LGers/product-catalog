import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';
import Logo from '../../assets/img/logo.png';

type Props = {};

class Header extends React.Component<Props> {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo-img" src={Logo} alt="Logo" />
        </Link>
        <p className="header__title">
          Product Shop
        </p>
        <Link to="/">
          <img className="header__logo-img" src={Logo} alt="Logo" />
        </Link>
      </header>
    );
  }
}

export default Header;

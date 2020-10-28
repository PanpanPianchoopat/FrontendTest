import React, { useState } from 'react';
import { ReactComponent as Plus } from './icons/plus.svg';
import { ReactComponent as Message } from './icons/messenger.svg';
import { ReactComponent as Bell } from './icons/bell.svg';
import { ReactComponent as Arrow } from './icons/dropdown.svg';
import { ReactComponent as Setting } from './icons/settings.svg';
import { ReactComponent as Question } from './icons/questionMark.svg';
import { ReactComponent as Logout } from './icons/logout.svg';
import { ReactComponent as LeftArr } from './icons/leftArrow.svg';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{ props.leftIcon }</span>
        { props.children }
        <span className="icon-right">{ props.rightIcon }</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onClick={calcHeight}
        >
        <div className="menu">
          <DropdownItem leftIcon={<Setting />} goToMenu="settings">
            Settings & Privacy
          </DropdownItem>
          <DropdownItem leftIcon={<Question />}>
            Help & Support
          </DropdownItem>
          <DropdownItem leftIcon={<Logout />}>
            Log Out
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        >
        <div className="menu">
          <DropdownItem leftIcon={<LeftArr />} goToMenu="main">
            Settings & Privacy
          </DropdownItem>
          <DropdownItem leftIcon={<Setting />}>Setting</DropdownItem>
          <DropdownItem leftIcon={<Setting />}>Setting</DropdownItem>
          <DropdownItem leftIcon={<Setting />}>Setting</DropdownItem>
          <DropdownItem leftIcon={<Setting />}>Setting</DropdownItem>
          <DropdownItem leftIcon={<Setting />}>Setting</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <Link to={ `/posts`}>
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        { props.icon }
      </a>

      {open && props.children}
    </li>
    </Link>
  );
}

function Nav() {

  return(
    <Navbar>
      <NavItem icon={<Plus />} />
      <NavItem icon={<Message />} />
      <NavItem icon={<Bell />} />
      <NavItem icon={<Arrow />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default Nav;
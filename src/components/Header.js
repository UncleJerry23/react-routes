import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/red">  Red  </Link>
          <Link to="/blue">  Blue  </Link>
          <Link to="/Yellow">  Yellow  </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;

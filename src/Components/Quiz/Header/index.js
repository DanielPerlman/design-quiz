import React from 'react';
import './index.scss';

function Header(props) {
  return (
    <div className="header">
      { props.children }
    </div>
  );
}

export default Header;

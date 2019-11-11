import React from 'react';
import './index.scss';

function Header() {
  return (
    <div className="header">
      { this.props.children }
    </div>
  );
}

export default Header;

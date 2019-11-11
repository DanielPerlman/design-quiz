import React from 'react';
import './index.scss';

function SubHeader(props) {
  return (
    <div className="sub-header">
      { props.children }
    </div>
  );
}

export default SubHeader;

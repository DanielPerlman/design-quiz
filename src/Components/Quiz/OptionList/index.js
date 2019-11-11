import React from 'react';
import OptionListItem from '../OptionListItem'
import './index.scss';

function OptionList(props) {
  let { stepImages, selectCallback } = props;
  return (
    <div className="option-list">
      { stepImages.map((value, index) => {
        
        return <OptionListItem key={index} index={index} imageData={value} selectCallback={selectCallback} />
      }) }
    </div>
  );
}

export default OptionList;

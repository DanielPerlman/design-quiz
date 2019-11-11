import React from 'react';
import './index.scss';

class OptionListItem extends React.Component {
  selectedEvent() {
    let { index, selectCallback } = this.props;
    selectCallback(index);
  }

  render() {
    let { imageData } = this.props;
    let { source, isSelected } = imageData;

    return (
      <div className={`option-list-item ${ isSelected ? 'option-list-item--selected' : '' }`} onClick={this.selectedEvent.bind(this)}>
        <img src={process.env.PUBLIC_URL + source}/> 
      </div>
    );
  }
}

export default OptionListItem;

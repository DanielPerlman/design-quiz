import React from 'react';
import './index.scss';
import Header from './Header';
import SubHeader from './SubHeader';
import OptionList from './OptionList';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
  }

  render() {
    let { currentStep } = this.state;

    return (
      <div className="quiz">
        <Header>Hello There</Header>
        <SubHeader>What's up?</SubHeader>
        <OptionList step={currentStep}></OptionList>
      </div>
    );
  }
}

export default Quiz;

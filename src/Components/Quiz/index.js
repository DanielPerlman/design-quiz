import React from 'react';
import './index.scss';
import { Header } from 'Components/Quiz/Header';
import { SubHeader } from 'Components/Quiz/SubHeader';
import { OptionList } from 'Components/Quiz/OptionList';

function Quiz() {

  return (
    <div className="quiz">
      <Header>Hello There</Header>
      <SubHeader>What's up?</SubHeader>
      <OptionList step={currentStep}></OptionList>
    </div>
  );
}

export default Quiz;

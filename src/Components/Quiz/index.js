import React from 'react';
import './index.scss';
import Header from './Header';
import SubHeader from './SubHeader';
import OptionList from './OptionList';
import QuizData from './QuizData';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentStep: "start",
      currentStepData: QuizData["steps"]["start"]
    };
  }

  updateStep(nextStep) {
    this.setState({
      currentStep: nextStep,
      currentStepData: QuizData["steps"][nextStep]
    });
  }

  selectCallback = (key) => {    
    let newStepData = this.state.currentStepData;
    newStepData.images[key].isSelected = !newStepData.images[key].isSelected;
    this.setState({
      currentStepData: newStepData
    })
  }

  render() {
    let { currentStep, currentStepData } = this.state;    
    let { title, secondaryTitle, images } = currentStepData;
    return (
      <div className="quiz">
        <div className="guide-container">
          <Header> { title } </Header>
          <SubHeader> { secondaryTitle } </SubHeader>
        </div>
        <OptionList selectCallback={this.selectCallback.bind(this)} stepImages={images}></OptionList>
      </div>
    );
  }
}

export default Quiz;

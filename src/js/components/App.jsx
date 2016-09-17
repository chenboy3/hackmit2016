import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TaskList from './TaskList.jsx';
import TransitionGroup from 'react-addons-transition-group';

import Questions from './Questions.jsx';
// import Title from './Title.jsx';
import Results from './Results.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      shouldShowTitle: 'visible',
      shouldShowQuestions: 'hidden',
      shouldShowResults: 'hidden'
    }
  },

  toggleResults () {
    this.setState({
      shouldShowResults: 'visible',
      shouldShowQuestions: 'hidden'
    });
  }, 

  toggleQuestions () {
    console.log('cya')
    this.setState({
      shouldShowTitle: 'hidden',
      shouldShowQuestions: 'visible'
    });
    this.forceUpdate();
  },

  render() {
    console.log('asdf', this.state)
    let titleStyle = {
      visibility: this.state.shouldShowTitle
    }

    let questionStyle = {
      visibility: this.state.shouldShowQuestions
    }

    let resultsStyle = {
      visibility: this.state.shouldShowResults
    }

    return (
      <div className="container text-center" style={titleStyle}>
        <div className="row text-center">
          <h1>Welcome to the new age personality test</h1>
          <p>Answer the following questions to see what kind of personality you are.</p>
          <a onClick={this.toggleQuestions}>Start!</a>
        </div>
        <Questions style={questionStyle}></Questions>
        <Results style={resultsStyle}></Results>
      </div>
      
    );
  }
});

import React from 'react';
import css from './Feedback.module.css';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(2);
  }

  render() {
    return (
      <div className={css.feedback}>
        <h2>Please leave feedback</h2>
        <div className={css.buttonContainer}>
          <button
            className={css.good}
            type="button"
            onClick={() =>
              this.setState(prevState => ({ good: prevState.good + 1 }))
            }
          >
            Good
          </button>
          <button
            className={css.neutral}
            type="button"
            onClick={() =>
              this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
            }
          >
            Neutral
          </button>
          <button
            className={css.bad}
            type="button"
            onClick={() =>
              this.setState(prevState => ({ bad: prevState.bad + 1 }))
            }
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className={css.statistics}>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

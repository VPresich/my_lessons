import React from 'react';
import styles from './CounterClass.module.css';

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className={styles.section}>
        <p>{this.state.count}</p>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={this.increment}>
            Increment
          </button>
          <button className={styles.btn} onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

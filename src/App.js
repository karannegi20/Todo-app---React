import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Learn react',
        completed: false,
      },
      {
        id: 3,
        title: 'Complete project',
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

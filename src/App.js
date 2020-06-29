
import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import * as uuid from 'uuid';
import './App.css';

export class App extends Component {
  state = {
    todos: []
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) =>{
      if(todo.id === id) {
        todo.status = !todo.status
      }
      return todo;
    }) });
  }

  markDelete = (id) => {
    this.setState({ todos:[...this.state.todos.filter((todo) => todo.id !== id)] });
  }

  addTodo = (tittle) => {
    const newTodo = {
      id: uuid.v4(),
      tittle,
      status: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} markDelete={this.markDelete}  />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App


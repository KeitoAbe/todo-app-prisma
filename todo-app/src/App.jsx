import { useState } from 'react'
import './App.css'
import React from 'react'

class InputArea  extends React.Component {

  render(){

    return (
      <div>
      <input type="text" id="todo"/>
      <button onClick={() => this.props.onClick()}>登録</button>
    </div>
    )
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  todoAdd(){
    const todosCopy = this.state.todos.slice();
    let todoText = document.getElementById('todo').value;
    document.getElementById('todo').value = '';
    todosCopy.push(todoText);
    this.setState({todos : todosCopy});
  }

  todoDone(index){
    let obj = document.getElementById(index);
    obj.style.textDecoration = "line-through";
  }

  todoDelete(index){
    const todosCopy = this.state.todos.slice();
    todosCopy.splice(index,1);
    this.setState({todos : todosCopy});
  }
  
render(){
 
  return (
    <div>
      <InputArea 
      onClick = {() => this.todoAdd()}
      />
      <div className='todoArea'>
        <ul>
        {this.state.todos.map((todo,index) => { 
          return (
            <div>
              <li key={index} id={index}>{todo}</li>
              <button onClick={() => {this.todoDone(index)}}>完了</button>
              <button onClick={() => {this.todoDelete(index)}}>削除</button>
            </div>
          )
          })}
        </ul>
      </div>
    </div>
  )
}

}
export default App

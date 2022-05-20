import React, { Component } from 'react';
import TodoItems from './components/TodoItem/TodoItems';
import AddItems from './components/AddItems/AddItems';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Sama", age: 30 },
      { id: 2, name: "Ahmed", age: 37 },
      { id: 3, name: "Laila", age: 34 },
      { id: 4, name: "Mohamed", age: 31 }
    ]
  }
deleteItems=(id) =>{
let items=this.state.items.filter(item=>{return item.id !==id})
// let i = items.findIndex(item=>item.id===id)
// items.splice(i,1)
this.setState({items})
}


addItem=(item)=>{
item.id = Math.random();
let items=this.state.items;
items.push(item);
this.setState({items})
}
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;

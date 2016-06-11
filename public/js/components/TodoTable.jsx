import React from 'react';
import TodoItem from './TodoItem'


class TodoTable extends React.Component{
	render(){
     
    //let updateTodo =this.props.updateTodo;
    //let deleteTodo=this.props.deleteTodo;

    var todos = this.props.todos.map(function(item){
            return <TodoItem key={item._id} todo={item} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>
        }.bind(this));

		//var todos=this.props.todos.map(function(item){
		//	return <TodoItem key={item.id} todo={item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
		//});//.bind(this);

		return (
			<div>
               <h2>Todo List</h2>
               <table className="table">
                   <thead>
                       <tr>
                           <th>content</th>
                           <th>status</th>
                           <th>time</th>
                           <th>operation</th>
                       </tr>
                    </thead>
                    <tbody>
                    {todos}
                    </tbody>
                </table>
           </div>
			)
	}
}
export default TodoTable;
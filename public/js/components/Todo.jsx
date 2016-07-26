import React from 'react';
import ReactDOM from 'react-dom';
import TodoTable from './TodoTable';
import TodoForm from './TodoForm';


class Todo extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {todos : []};
        //this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
	}

    listTodo  () {
        $.ajax({
            type : 'get',
            dataType:'json',
            url : '/api/todo/list'
        }).done(function(resp){
            if(resp.status == "success"){
                this.setState({todos:resp.todos});
            }
        }.bind(this))
    }
    
    addTodo(content){
        $.ajax({
            type : 'post',
            url : '/api/todo',
            data : {content:content}
        }).done(function (resp) {
            if(resp.status == "success"){
                this.listTodo();
            }
        }.bind(this))

    } 
    updateTodo (id,status){
        $.ajax({
            type : 'put',
            url : '/api/todo',
            data : {id:id,status:status}
        }).done(function (resp) {
            if(resp.status == "success"){
                this.listTodo();
            }
        }.bind(this))
    }


    deleteTodo (id){
         $.ajax({
            type : 'delete',
            url : '/api/todo/'+id
        }).done(function(resp){
            console.log(resp);
            if(resp.status == 'success'){
                this.listTodo();
            }
        }.bind(this))

    }

    componentDidMount (){
        this.listTodo();
        //setTimeout(()=>this.listTodo(),10)
    }

    render (){

        return(
            <div>
                <TodoForm addTodo = {this.addTodo} />
                <TodoTable todos = {this.state.todos} updateTodo={this.updateTodo} deleteTodo = {this.deleteTodo}/>
            </div>
        )
    }
}
export default Todo;
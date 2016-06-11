import React from 'react'

class TodoForm extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		var content=this.refs.content.value.trim();
		if(!content){
			return ;
		}
		this.props.addTodo(content);
		this.refs.content.value="";
		//React.findDOMNode(this.refs.content).value="";
	}
	
	render(){
		return (
			<form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
                <input ref="content" className="form-control" id="content" name="content" type="text"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Add</button>
                </span>
            </form>
			)
	}
}
export default TodoForm;
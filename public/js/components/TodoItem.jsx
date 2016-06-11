import React from 'react'

class TodoItem extends React.Component{

	handleUpdate(id,status){

		this.props.updateTodo(id,status);
	}
	
	handleDelete(id){
		this.props.deleteTodo(id);
	}

	render(){
		var t= this.props.todo;
		console.log(t);
		var updateBtn;
		if(t.status==0){
			updateBtn=<button onClick={this.handleUpdate.bind(this,t._id,1)} className='btn btn-primary'>Done</button>
		}
		else{
			updateBtn=<button onClick={this.handleUpdate.bind(this,t._id,0)} className='btn btn-primary'>Undone</button>

		}
		return (
				<tr>
					<td>{t.content}</td>
					<td>{t.status==0?'uncomplete':'complete'}</td>
					<td>{t.time}</td>
					<td>
						{updateBtn}
						<button onClick={this.handleDelete.bind(this,t._id)} className="btn btn-danger">Delete</button>
					</td>
				</tr>
			)
	}

}
export default TodoItem;
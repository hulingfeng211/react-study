
import React from 'react';
import style from './site.css';

class Demo1 extends React.Component {

	constructor(props){
		super(props);
		this.state={liked:false};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({liked:!this.state.liked});
	}


	render(){
		const text = this.state.liked?'like':'haven \'t liked';
		return (
			<div onClick={this.handleClick} classname={style.title}>
				 <h1 className={style.title}>
      				Hello World
    			</h1>
    			<h1 className="title">
      				global scope style.
    			</h1>
				You {text} this.Click to toggle.
			</div>
			);

	}
}
export default Demo1
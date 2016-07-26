import React from 'react';
import {Popover,Tooltip,Button,Modal,OverlayTrigger} from 'react-bootstrap';



class SignIn extends React.Component {

	constructor(props){
		super(props);
		this.state={showModal:true};
		this.open=this.open.bind(this);
		this.close=this.close.bind(this);
	}

	close(){
		this.setState({showModal:false});
		//this.history.pushState(null, 'home');
	}
	open(){
		this.setState({showModal:true});
	}

	render(){

		return (
			<div>
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Welcome SignIn </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						 
						<h4>Overflowing text to show scroll behavior</h4>
						<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
						<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
			);


	}
}
export default SignIn
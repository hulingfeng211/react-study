import React from 'react';
import {Carousel,Item} from 'react-bootstrap';

class ControlledCarousel extends React.Component {

	constructor(props){
		super(props);
		this.state={
			index:0,
			direction:null
		};
		this.handleSelect=this.handleSelect.bind(this);
	}
	handleSelect(selectIndex,e){
		this.setState({
			index:selectIndex,
			direction:e.direction
		});
	}

	render(){
		let img_style={margin:"auto",display:"block"};
		return (
				<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
			        <Carousel.Item>
			          <img style={img_style} width={900} height={500} alt="900x500" src="/public/img/carousel.png"/>
			          <Carousel.Caption>
			            <h3>First slide label</h3>
			            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			          </Carousel.Caption>
			        </Carousel.Item>
			        <Carousel.Item>
			          <img style={img_style} width={900} height={500} alt="900x500" src="/public/img/carousel.png"/>
			          <Carousel.Caption>
			            <h3>Second slide label</h3>
			            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			          </Carousel.Caption>
			        </Carousel.Item>
			        <Carousel.Item>
			          <img style={img_style} width={900} height={500} alt="900x500" src="/public/img/carousel.png"/>
			          <Carousel.Caption>
			            <h3>Third slide label</h3>
			            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			          </Carousel.Caption>
			        </Carousel.Item>
		      </Carousel>
			);
	}
}

export default ControlledCarousel;
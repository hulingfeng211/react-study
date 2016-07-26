'use strict'

import React from 'react'
//import Button from 'react-bootstrap/lib/Button'
import { Button } from 'react-bootstrap';
import ThumbnailDiv from './react-demo/ThumbnailDiv';
import ControlledCarousel from './react-demo/ControlledCarousel';

class Home extends React.Component {  
	render() {
		let div_style={margin:"-20px 0px 0px 0px"};
        return  (
        		<div style={div_style} >
        			<ControlledCarousel />
        			<br/>
        			<div className="container">
        				<ThumbnailDiv/>
        			</div>
        		</div>
        	);
    }
}

export default Home;
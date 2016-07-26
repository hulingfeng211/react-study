import React from 'react';
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap';
//let thumb=require('../../img/thumbnaildiv.png');

class ThumbnailDiv extends React.Component{
	render(){
		return (
			<Grid>
			    <Row>
				    <Col xs={12} md={4}>
				      <Thumbnail src="/public/img/thumbnaildiv.png" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				          <Button bsStyle="primary">Button</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
				    <Col xs={12} md={4}>
				      <Thumbnail src="/public/img/thumbnaildiv.png" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				          <Button bsStyle="primary">Button</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
				    <Col xs={12} md={4}>
				      <Thumbnail src="/public/img/thumbnaildiv.png" alt="242x200">
				        <h3>Thumbnail label</h3>
				        <p>Description</p>
				        <p>
				          <Button bsStyle="primary">Button</Button>&nbsp;
				          <Button bsStyle="default">Button</Button>
				        </p>
				      </Thumbnail>
				    </Col>
			    </Row>
		  </Grid>
			);
	}
}

export default ThumbnailDiv;
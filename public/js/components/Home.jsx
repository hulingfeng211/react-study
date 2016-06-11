'use strict'

import React from 'react'
//import Button from 'react-bootstrap/lib/Button'
import { Button } from 'react-bootstrap';

class Home extends React.Component {  
	render() {
        return <Button bsStyle="success" bsSize="large" children="Register" />
    }
}

export default Home;
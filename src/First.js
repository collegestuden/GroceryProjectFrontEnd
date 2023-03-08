import React, { Component } from 'react';
import './First.css';
import './Sign';
import { Link } from 'react-router-dom';
class First extends Component {
render() {
	return (
	<div className="back">
        <a><Link to="/Sign"><button className="yy">START</button></Link></a>
	</div>
	);
}
}

export default First;

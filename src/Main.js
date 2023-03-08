import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
class First extends Component {
render() {
	return (
	<div className="ll">
                <div className="lll">
                <h1 className="hh"><center>Find My Grocery</center></h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        <div className="">
        <a><Link to="/Post"><button >Post a Items</button></Link></a>
        </div>
        <div className="">
        
        <Link to="/Get"><button>Get a Items</button></Link>
        </div>
        <div className="">
        <Link to="/Put"><button>Put a Items</button></Link>
        </div>
        <div className="">
        <Link to="/Delete"><button>Delete a Items</button></Link>
        </div>
        
	</div>
        </div>
	);
}
}

export default First;

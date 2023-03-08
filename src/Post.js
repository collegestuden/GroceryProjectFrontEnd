import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            sid:"",
            sname:"",
            brand:"",
            rack:"",
            section:""
        };
    }

    handleIdChange=(event)=>{
        this.setState({sid:event.target.value});
    };
    handleNameChange=(event)=>{
        this.setState({sname:event.target.value});
    };
    handleBrandChange=(event)=>{
        this.setState({brand:event.target.value});
    };
    handleRackChange=(event)=>{
        this.setState({rack:event.target.value});
    };
    handleSectionChange=(event)=>{
      this.setState({section:event.target.value});
  };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sid: this.state.sid,
            sname: this.state.sname,
            brand: this.state.brand,
            rack: this.state.rack,
            section:this.state.section
            
          };
        
          axios.post('http://127.0.0.1:8080/addinfo', data)
};

render(){
    return(
        <div className="Apppp">
	<header className="App-header1">
	<form onSubmit={this.handleSubmit}>
	<h2><b>Post a Grocery Items</b></h2>		
    <label >
		ID:
		</label><br/>
		<input type="integer" value={this.state.sid} required onChange={this.handleIdChange} /><br/>

        <label>
        Product:
		</label><br/>
		<input type="text" value={this.state.sname} required onChange={this.handleNameChange} /><br/>
        
		<label>
		Brand:
		</label><br/>
		<input type="text" value={this.state.brand} required onChange={this.handleBrandChange} /><br/>
		
		<label>
		Rack:
		</label><br/>
		<input type="number" value={this.state.rack} required onChange={this.handleRackChange} /><br/>
			
    <label>
		Section:
		</label><br/>
		<input type="text" value={this.state.section} required onChange={this.handleSectionChange} /><br/>
		<button className="u" type="submit">Submit</button>
	</form>
	</header>
	</div>
    );
}
}

export default Post;
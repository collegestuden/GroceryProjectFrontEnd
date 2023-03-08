import React, {Component} from 'react';
import './Get.css';
import axios from 'axios';

class Get extends Component{
    state = {
        data:[]
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/show')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render(){
        return (
          
            <div className="getch">
              <h1><center>Get a Grocery Items</center></h1>
            <table border={1}>
            <thead>
              <tr>
                <th>sid</th>
                <th>sname</th>
                <th>brand</th>
                <th>rack</th>
                <th>section</th>

              </tr>
            </thead>
            <tbody>
              {this.state.data.map(user => (
                <tr key={user.id}>
                  <td>{user.sid}</td>
                  <td>{user.sname}</td>
                  <td>{user.brand}</td>
                  <td>{user.rack}</td>
                  <td>{user.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          );
        }
}

export default Get;
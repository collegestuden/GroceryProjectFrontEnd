import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import './First';
import First from "./First";
import Sign from "./Sign";
import Reg from "./Reg";
import Post from "./Post";
import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";
import Main from "./Main";
function App() {
return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<First/>}></Route>
                <Route path="/Sign" element={<Sign/>}></Route>
                <Route path="/Reg" element={<Reg/>}></Route>
                <Route path="/Post" element={<Post/>}></Route>
                <Route path="/Get" element={<Get/>}></Route>
                <Route path="/Put" element={<Put/>}></Route>
                <Route path="/Delete" element={<Delete/>}></Route>
                <Route path="/Main" element={<Main/>}></Route>


                


            </Routes>
        </div>
    </Router>
);
}
export default App;



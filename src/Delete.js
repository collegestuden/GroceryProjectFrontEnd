import axios from "axios";
import react ,{useState}from "react";
import './Delete.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div className="tt">
<div class="ccc">
                <h2 id="dels">Delete Items</h2>
                <div className="" >
                    <input type="text" className='k' placeholder="Enter the Id"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>
                        
                    
                    
                </div>
                
                 
            </div>      
        </div>
  )
}

export default Delete
import React, {useState, useEffect} from 'react';

import './App.css';
import Axios from 'axios'

function App() {

  const [songName, setSongName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [songGroupList, setGroupList] = useState([])


 useEffect{() =>{
  Axios.get('http://localhost:3001/api/get').then((response)=>{
    setGroupList(response.data)
  }, [])
  const submitGroup = () =>{
    Axios.post('http://localhost:3001/api/insert', {songName: songName, groupName: groupName}).then(()=>{
      alert("successful insert");
  
    });
  
    };
  

}}


  

  return (
    <div className="App">
      <h1>KPOP</h1>
       <div className="form" >

        <label>Song Name:</label>
       <input type="text" name="songName" onChange={(e) =>{
         setSongName(e.target.value)
       }
      }/>
       
       <label>Group:</label>
       <input type="text" name="Group" onChange={(e) =>{
         setGroupName(e.target.value)
       }
      }/>

       <button onClick={submitGroup}>Submit</button>
       {movieReviewList.map((val)=>{
         return <h1>Song Name: {val.songName} | Group: {val.groupName}
          
          </h1>

       })}
       </div>
    </div>
  );
}

export default App;

import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import './admin.css';



const DataBase = () => {

  const [Bike, setUsers] = useState([]);


  
  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const result =await axios.get("http://localhost:8080/set");
    setUsers(result.data);
  };  
  const deleteBike = async (bikeid) => {
    await axios.delete(`http://localhost:8080/delete/${bikeid}`)
   loadUsers()
  };


    return (
      <div className='abc123'>
          <div className='heading001'>DataBase</div>

        <div className='table123'>
          <div className='table2'>
            <table id="customers">
  <thead>
    <tr>
      <th scope="col">bikeid</th>
      <th scope="col">bikename</th>
      <th scope="col">cc</th>
      <th scope="col">engine</th>
      <th scope="col">mileage</th>
      <th scope="col">tyretype</th>
      <th scope="col">power</th>
      <th scope="col">torque</th>
      <th scope="col">brake</th>
      <th scope="col">price</th>
      <th scope="col" className='heltab'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      Bike.map((user,index) =>  (
        <tr>
        
          <td key={index}>{index+1}</td>
          <td>{user.bikename}</td>
          <td>{user.cc}</td>
          <td>{user.engine}</td>
          <td>{user.mileage}</td>
          <td>{user.tyretype}</td>
          <td>{user.power}</td>
          <td>{user.torque}</td>
          <td>{user.brake}</td>
          <td>{user.price}</td>
          <td>
            <div className='buttons01'>
            <Link className='viewbtn'  to={`/view/${user.bikeid}`}>View</Link>
            <Link className='editbtn'
            to={`/edit/${user.bikeid}`}
             >Edit</Link>
            <button 
             className='deletebtn'
             onClick={() => deleteBike(user.bikeid)}
            >
              Delete</button>
              </div>
          </td>
        </tr>
      ))
    }

    
  </tbody>
</table>
<button className='but'>
<Link className='butt' to="/add">Adduser</Link>
</button>
</div>
        </div>
        </div>
    );
}

export default DataBase;
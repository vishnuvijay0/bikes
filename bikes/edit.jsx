import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


function EditUser(props) {


 
  let navigate = useNavigate();

  const [bike, setUser] = useState({
    bikename: "",
    cc: "",
    engine:"",
    mileage:"",
    tyretype:"",
    power:"",
    torque:"",
    brake:"",
    price:""
  });

  const {bikename, cc,engine,mileage,tyretype,power,torque,brake,price } = bike;

  const onInputChange = (e) => {
    setUser({ ...bike, [e.target.name]: e.target.value });
  };

  const {id} = useParams()

  
  useEffect(() => {
    loadUser();
  }, []);
  
  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/save`, bike);
      navigate("/admin");
    };
  
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/set/${id}`);
    setUser(result.data)
  };
  

  return (
    <div>
    <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h1 className="text-center">Edit User</h1>

          <form onSubmit={(e) => onSubmit(e)}>
          
           
            <div className="mb-1">
              <label htmlFor="bikeid" className="form-label">
                bikeid
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your bikeid"
                name="bikeid"
                value={id}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="bikename" className="form-label">
                bikename
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your bikename"
                name="bikename"
                value={bikename}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="cc" className="form-label">
                cc
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your cc "
                name="cc"
                value={cc}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="engine" className="form-label">
                engine
              </label>
              <input
                type={"engine"}
                className="form-control"
                placeholder="Enter your engine"
                name="engine"
                value={engine}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>


    
            <div className="mb-5">
              <label htmlFor="mileage" className="form-label">
                mileage
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mileage"
                pattern="\d+" 
                name="mileage"
                value={mileage}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="tyretype" className="form-label">
              tyretype
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your tyretype"
                name="tyretype"
                value={tyretype}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
        

          
            <div className="mb-7">
              <label htmlFor="power" className="form-label">
              power
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your power"
                name="power"
                value={power}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="torque" className="form-label">
              torque
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your torque"
                name="torque"
                value={torque}
                onChange={(e) => onInputChange(e)}
                required
              />
              </div>
        
            <div className="mb-9">
              <label htmlFor="brake" className="form-label">
              brake
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your brake"
                name="brake"
                value={brake}
                onChange={(e) => onInputChange(e)}
                required
                />
            </div>
            <div className="mb-10">
              <label htmlFor="price" className="form-label">
              price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                required
                />
            </div>
          
            
            <button type="submit" className="btn-btn-outline-primary">
              Submit
            </button>
            <Link className="btn-outline-danger-mx-2" to="/admin">
              Back To Login
            </Link>
           
          </form>
        </div>
      </div>
    </div>

    </div>
    </div>
  );
}
EditUser.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: EditUser.func,
};


export default EditUser;
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import  { useState } from "react";
import './add.css';



function Register(props) {
  
 
  let navigate = useNavigate();

  const [Bike, setUser] = useState({
    bikeid:"",
    bikename: "",
  cc: "",
    engine: "",
    mileage:"",
    tyretype:"",
    power:"",
    torque:"",
    brake:"",
    price:"",
  });

  const { bikeid,bikename, cc, engine,mileage,tyretype,power,torque,brake,price } = Bike;

  const onInputChange = (e) => {
    setUser({ ...Bike, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/ins", Bike);
    navigate("/admin");
  };
 
  

  return (
    <div>
   <div>
      <form  onSubmit={(e) => onSubmit(e)}>
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
              bikeid
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your bikeid"
                name="bikeid"
                value={bikeid}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
              cc
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your cc"
                name="cc"
                value={cc}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
              engine
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your engine"
                name="engine"
                value={engine}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
              mileage
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mileage"
                name="mileage"
                value={mileage}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      <div className="mb-1">
              <label htmlFor="Name" className="form-label">
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
      
      <button>submit</button>
      </form>
    </div>
    </div>
  );
}

Register.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Register;
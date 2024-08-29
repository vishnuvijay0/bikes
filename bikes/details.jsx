import React, { useState } from 'react';
import './details.css';

function SignUp() {
  const [bikeDetails, setBikeDetails] = useState({
    bikeId: '',
    bikeName: '',
    cc: '',
    engine: '',
    mileage: '',
    tyreType: '',
    power: '',
    torque: '',
    brake: '',
    price: ''
  });

  const { bikeId, bikeName, cc, engine, mileage, tyreType, power, torque, brake, price } = bikeDetails;

  const handleInputChange = (e) => {
    setBikeDetails({ ...bikeDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Bike Details:', bikeDetails);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="bikeId">Bike ID</label>
          <input
            type="text"
            id="bikeId"
            name="bikeId"
            value={bikeId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bikeName">Bike Name</label>
          <input
            type="text"
            id="bikeName"
            name="bikeName"
            value={bikeName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cc">CC</label>
          <input
            type="text"
            id="cc"
            name="cc"
            value={cc}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="engine">Engine</label>
          <input
            type="text"
            id="engine"
            name="engine"
            value={engine}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mileage">Mileage</label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            value={mileage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tyreType">Tyre Type</label>
          <input
            type="text"
            id="tyreType"
            name="tyreType"
            value={tyreType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="power">Power</label>
          <input
            type="text"
            id="power"
            name="power"
            value={power}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="torque">Torque</label>
          <input
            type="text"
            id="torque"
            name="torque"
            value={torque}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="brake">Brake</label>
          <input
            type="text"
            id="brake"
            name="brake"
            value={brake}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
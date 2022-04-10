import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  /* if (user) {
    navigate("/shop");
  } */

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          {" "}
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add shipping" />
        </form>
        <p>
          Already Have An Account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="or-with-hr">
          <div className="first-border"></div>
          or
          <div className="second-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;

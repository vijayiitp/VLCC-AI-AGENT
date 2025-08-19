import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
const PhoneCallForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ name, countryCode, phone });
    }

    setName("");
    setCountryCode("+91"); 
    setPhone("");
  };

  return (
    <div className="phonecall-container">
      <div className="phonecall-card">
        {/* Header */}
        <div className="phonecall-header">
          <span style={{ marginRight: "8px" }}><CiPhone /></span>
          <span>Phone Call Details</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="phonecall-form">
          {/* Name */}
          <label className="phonecall-label">Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="phonecall-input"
            required
          />

          {/* Phone */}
          <label className="phonecall-label">Phone Number</label>
          <div className="phonecall-phone-row">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="phonecall-select"
            >
              <option value="+91">IN +91</option>
              <option value="+1">US +1</option>
              <option value="+44">UK +44</option>
              <option value="+61">AU +61</option>
            </select>
            <input
              type="tel"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="phonecall-phone-input"
              required
            />
          </div>

          {/* Button & Footer */}
          <div style={{ textAlign: "center" }}>
            <button className="phonecall-button" type="submit">
              Request a Call
            </button>
            <div className="phonecall-footer">
              You will receive a call within 2-3 minutes
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneCallForm;

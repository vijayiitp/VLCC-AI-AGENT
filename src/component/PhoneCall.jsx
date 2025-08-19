import React, { useState } from "react";

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
  setCountryCode("");
  setPhone("");
};


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <span style={{ marginRight: "8px" }}>📞</span>
          <span>Phone Call Details</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name */}
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />

          {/* Phone */}
          <label style={styles.label}>Phone Number</label>
          <div style={styles.phoneRow}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={styles.select}
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
              style={styles.phoneInput}
              required
            />
          </div>

          {/* Footer note */}
           <div style={{ textAlign: "center"}}>
      {/* Button */}
      <button style={styles.button} onClick={handleSubmit}>
        Request a Call
      </button>

    
        <div style={styles.footer}>
          You will receive a call within 2-3 minutes
        </div>
    
    </div>
        </form>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "100vh",
    background: "#f8f9fa",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "400px",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    background: "#ff6b4a",
    color: "#fff",
    padding: "14px",
    fontWeight: "600",
    textAlign: "center",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: "20px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    display: "block",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
  phoneRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    minWidth: "100px",
  },
  phoneInput: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
   footer: {
      marginTop: "20px",
      // padding: "15px",
      borderRadius: "8px",
      textAlign: "center",
      fontFamily: "'Agrandir Grand'",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      marginTop: "none",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#ff6b4a",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
    },
};

export default PhoneCallForm;

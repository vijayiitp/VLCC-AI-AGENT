import React from "react";

const ConnectAgentForm = ({
  onSubmit,
  buttonText = "Start Call",
  title = "Connect to AI Agent",
  description = "Provide your details to start the conversation (all fields are optional)",
}) => {
  return (
    // <div style={styles.container}>
      <div style={styles.card}>
        
        {/* Icon */}
        <div style={styles.icon}>📞</div>

        {/* Title & Description */}
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>

        {/* Form */}
        <form onSubmit={onSubmit} style={styles.form}>
          <input type="text" placeholder="Your name (optional)" style={styles.input} />
          <input type="email" placeholder="Your email (optional)" style={styles.input} />
          <input type="tel" placeholder="Your phone number (optional)" style={styles.input} />
          <button type="submit" style={styles.button}>{buttonText}</button>
        </form>

        {/* Note */}
        <p style={styles.note}>
          Your information is used only for this session and is not stored permanently.
        </p>
      </div>
    // </div>
  );
};

const styles = {
  // container: {
  //   fontFamily: "Agrandir Grand",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   background: "#f9fafb",
  //   padding: "20px",
  // },
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "380px",
    width: "100%",
    textAlign: "center",
  },
  icon: {
    background: "#ff6b4a",
    color: "#fff",
    fontSize: "28px",
    padding: "14px",
    borderRadius: "50%",
    display: "inline-block",
    marginBottom: "16px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#ff6b4a",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  note: {
    fontSize: "12px",
    color: "#999",
    marginTop: "12px",
  },
};

export default ConnectAgentForm;

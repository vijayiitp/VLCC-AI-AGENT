import ConnectAgentForm from './AIagentCall';
import PhoneCallForm from './PhoneCall';
import {useState} from 'react';
function CenterBox() {
    const [showAgentForm, setShowAgentForm] = useState(true);
    
  return (
   <>
  <style>{`
    .center-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 64px);
      text-align: center;
      background: #fff;
      font-family: Arial, sans-serif;
    }

    .center-box h1 {
      font-size: 3rem;
      font-weight: bold;
      color: #ff6b4a;
      margin-bottom: 10px;
    }

    .center-box p {
      font-size: 1.5rem;
      color: #ff6b4a;
      margin-bottom: 40px;
    }

    .options {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 60px;
      margin-bottom: 40px;
    }

    .option {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: 0.3s;
    }

    .circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #ff6b4a;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }

    .circle img {
      width: 60px;
      height: 60px;
      filter: brightness(0) invert(1); /* makes icon white */
    }

    .option span {
      font-size: 14px;
      font-weight: bold;
      color: #000;
    }
    .option .circle:hover{
        background: #7d460b;
    }

    /* Highlight when active */
    .option.active .circle {
      background: #7d460b; 
    }

    .divider {
      width: 1px;
      height: 150px;
      background: black;
    }

    .call-btn {
      background: #ff6b4a;
      color: black;
      font-weight: bold;
      border: none;
      padding: 12px 40px;
      border-radius: 30px;
      cursor: pointer;
      transition: 0.3s;
      letter-spacing: 1px;
    }

    .call-btn:hover {
      background: #ff8569;
    }
  `}</style>

  <div className="center-box">
    <h1>Ask for your queries</h1>
    <p>Using our AI Agent Vaarti</p>

    <div className="options">
      {/* Web Call Option */}
      <div
        className={`option ${showAgentForm ? "active" : ""}`}
        onClick={() => setShowAgentForm(true)}
      >
        <div className="circle">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/monitor.png"
            alt="Web Call"
          />
        </div>
        <span>WEB CALL</span>
      </div>

      {/* Conditional Form */}
      {showAgentForm ? <ConnectAgentForm /> : <PhoneCallForm />}

      {/* Phone Call Option */}
      <div
        className={`option ${!showAgentForm ? "active" : ""}`}
        onClick={() => setShowAgentForm(false)}
      >
        <div className="circle">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/iphone.png"
            alt="Phone Call"
          />
        </div>
        <span>PHONE CALL</span>
      </div>
    </div>
  </div>
</>

  );
}

export default CenterBox;

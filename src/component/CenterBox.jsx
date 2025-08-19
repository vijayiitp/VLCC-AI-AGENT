import ConnectAgentForm from './AIagentCall';
import PhoneCallForm from './PhoneCall';
import { useState, useEffect } from 'react';

function CenterBox() {
  const [showAgentForm, setShowAgentForm] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      

      <div className="center-box">
        <h1>Ask for your queries</h1>
        <p>Using our AI Agent Vaarti</p>
        {isMobile && (showAgentForm ? <ConnectAgentForm /> : <PhoneCallForm />)}

        <div className={`options ${isMobile ? "mobile" : ""}`}>

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
          {!isMobile && (showAgentForm ? <ConnectAgentForm /> : <PhoneCallForm />)}

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

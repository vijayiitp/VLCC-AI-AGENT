function Header() {
  return (
    <>
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background-color: transeperent;
          color: white;
        }

        .logo img {
          height: 40px;
          width: auto;
        }

        .menu-btn button {
          font-size: 24px;
          background: none;
          border: none;
          color: black;
          cursor: pointer;
        }

        .menu-btn button:hover {
          color: #ff9800;
        }
      `}</style>

      <header className="header">
        {/* Left side - Logo */}
        <div className="logo">
          <img src="./Techladder.png" alt="Logo" />
        </div>

        {/* Right side - Menu Button */}
        <div className="logo">
          <img src="./VLCC.png" alt="Logo" />
        </div>
      </header>
    </>
  );
}

export default Header;

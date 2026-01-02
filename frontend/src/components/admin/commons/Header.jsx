import logo from "../../../assets/imgs/logo.svg";
import { PiBellSimpleRingingFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import "./header.css";

const Header = () => {
  return (
    <header className="admin-header">
      {/* Logo Section */}
      <div className="header-logo-section">
        <img src={logo} alt="logo" className="header-logo" />
        <h1 className="header-title">Admin Dashboard</h1>
      </div>

      {/* Actions Section */}
      <div className="header-actions">
        {/* Notifications */}
        <button className="header-icon-btn">
          <PiBellSimpleRingingFill />
          <span className="notification-badge">3</span>
        </button>

        {/* Settings */}
        <button className="header-icon-btn">
          <IoSettings />
        </button>

        {/* Divider */}
        <div className="header-divider"></div>

        {/* Profile */}
        <div className="header-profile">
          <div className="header-avatar">AD</div>
          <div className="header-profile-info">
            <p className="header-profile-name">Admin User</p>
            <p className="header-profile-role">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

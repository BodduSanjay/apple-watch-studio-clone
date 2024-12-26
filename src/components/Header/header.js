import { useState } from "react";
import "./header.css";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header className="hrd-container">
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
        alt="Apple Watch"
        width="90"
        height="20"
        className="app-img-logo"
      />
      <div className="collections-wrapper">
        <button className="collections" onClick={toggleDropdown}>
          Collections{" "}
          <span className="arrow">
            <FaAngleDown size={10} />
          </span>
        </button>
        {showDropdown && (
          <>
            <div className="overlay" onClick={closeDropdown}></div>
            <div className="dropdown">
              <div className="dropdown-item">Apple Watch Series 10</div>
              <div className="dropdown-item">Apple Watch Hermès Series 10</div>
              <div className="dropdown-item">Apple Watch SE</div>
            </div>
          </>
        )}
      </div>
      <button className="save-hdr-btn">Save</button>
    </header>
  );
};

export default Header;

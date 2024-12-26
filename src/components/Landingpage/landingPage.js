import React from "react";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <header className="hero-header">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
          alt="Apple Watch"
          width="90"
          height="20"
          className="app-img-logo"
        />
      </header>
      <div className="hero-content">
        <p className="apple-st-para">Apple Watch Studio</p>
        <h1 className="apple-st-heading">
          Choose a case.
          <br />
          Pick a band.
          <br />
          Create your own style.
        </h1>
        <button
          className="hero-button"
          onClick={() => navigate("/watch-preview")}
        >
          Get started
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
          alt="Apple Watch"
          className="apple-display-image"
        />
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
          alt="belt"
          className="apple-belt-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;

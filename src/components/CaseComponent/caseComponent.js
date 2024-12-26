import React, { useState, useEffect } from "react";
import "./caseComponent.css";
import Header from "../Header/header";
import { useNavigate } from "react-router-dom";
import CaseSlider from "../CaseSlider/caseSlider";
import { useSelection } from "../../selectedContext/selectedContext";

const CaseComponent = () => {
  const { selectedBand, selectedCase } = useSelection();
  const [isSideImage, setIsSideImage] = useState(true);
  const [animate, setIsAnimate] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = () => {
    setIsSideImage((prevState) => !prevState);
  };

  useEffect(() => {
    setIsAnimate(true);
  }, []);

  const cases = [
    {
      id: 0,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
      name: "Silver Aluminum",
      price: 180,
      sideImage:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-silver-nc-s10_VW_34FR+watch-face-46-aluminum-silver-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWXFFVjdLK0FIVkcybkFCSU5TazZqeGo4SU1nSmEzL05yUUJLZXdmaWhScVNndmdtajNLc0tYa29tMjdSbHJFVEp0ZjZkMHZqenFTREwzcHVvQ3ZRL1hBdzhRZzJqU0xkSEpFODEzRDVva3c2SjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjTGR2eVV1dVhZMUJWaDN1R2o1UnI4SDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw",
    },
    {
      id: 1,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      name: "Rose Gold Aluminum",
      price: 200,
      sideImage:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-rosegold-nc-s10_VW_34FR+watch-face-46-aluminum-rosegold-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWWYyNHkrWFJNZ1BodmdwcWlUcmtNMkhaMkVQZTdleWFvVytrdnNBQmJzc2RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJiLzMwazFsQmpWNUowMkIwc3EzL0xpSkl2OTJEMEdGMUpkR2p1bmRlWnpuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqa2NVRDBtRHBIdlNvZFpvSFN3SFNrVXlKN3h2cmJhZy9Wa2xIdm9lcGFpb285ZnlFYUluNlVpdEVDTlo4UFJtQnVWV3Bsak5WR3RZeXgwZTJxZ1FBQWQwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdUYVhFbmVlOVBZQVJ6YVVMREY4VVdDSkxMYjhBbEZsbUNjbmtLUUgvNzJC",
      name: "Gold Titanium",
      price: 280,
      sideImage:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-titanium-gold-cell-s10_VW_34FR+watch-face-46-titanium-gold-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYkdzNmhoZy9wdXZ1eGxsMlpWR095YjZhM1lKSU1XSjRzVll6MyttdlhpVVNndmdtajNLc0tYa29tMjdSbHJFVEpRQ1BINzRIOVNwOEhydmVpRU1xK21INHduY3RlaVl4bnFsS1dyWThFSSt5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6bVVOZy93RFBhVFYxY0d4YWhRZ2lTdw",
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      name: "Natural Titanium",
      price: 220,
      sideImage:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-titanium-natural-cell-s10_VW_34FR+watch-face-46-titanium-natural-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWVAyU2JPM1Q0emFpRE50TC95Y1liWWFrQXYxY2pXckE2QVZDWEhUZHpMMm5qblBjd2JiYm5raG5NaEt4aVI1UUlQMlNiTzNUNHphaUROdEwveWNZYllQdExIVVAwV1g4TGVMb1BoVUViaWMzUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
  ];

  return (
    <div className="watch-preview">
      <Header />

      <main className="content">
        <CaseSlider
          items={cases}
          isSideImage={isSideImage}
          isCaseSelection={true}
          backgroundImage={
            selectedBand ? selectedBand.image : "default-band.jpg"
          }
        />

        <div className={`watch-details ${animate ? "fade-in" : ""}`}>
          <p className="side-view" onClick={handleImageChange}>
            {isSideImage ? "Front view" : "Side view"}
          </p>
          <h2 className="title">APPLE WATCH SERIES 10</h2>
          <p className="description">
            46mm {selectedCase.name} Case with {selectedBand.name}
          </p>
          <p className="price">
            From ${150 + selectedBand.price + selectedCase.price}
          </p>
        </div>

        <div className="options">
          <p className="option" onClick={() => navigate("/watch-sizes")}>
            <svg
              height="25"
              viewBox="0 0 19 25"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h19v25h-19z" fill="none"></path>
              <path
                d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                fill="#1d1d1f"
              ></path>
            </svg>
            Size
          </p>
          <p className="option">
            <svg
              height="25"
              viewBox="0 0 17 25"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h17v25h-17z" fill="none"></path>
              <path
                d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z"
                fill="#1d1d1f"
              ></path>
            </svg>
            <p>Aluminum</p>
            <p>Titanium</p>
          </p>
          <p className="option" onClick={() => navigate("/watch-bands")}>
            <svg
              height="25"
              viewBox="0 0 10 25"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h10v25h-10z" fill="none"></path>
              <path
                d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 .0815.485v9.015a2.5 2.5 0 0 0 5 0v-9.015a1.4873 1.4873 0 0 1 .0806-.485m1.4194-1a.5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5h-.015a.485.485 0 0 0 -.485.485v9.015a3.5 3.5 0 0 1 -3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5v-9.015a.485.485 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3.2179 10.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75z"
                fill="#1d1d1f"
              ></path>
            </svg>
            Band
          </p>
        </div>
      </main>
    </div>
  );
};

export default CaseComponent;

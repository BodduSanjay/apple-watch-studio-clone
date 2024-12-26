import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelection } from "../../selectedContext/selectedContext";
import "./caseSlider.css";

const CaseSlider = ({
  items,
  isSideImage,
  isCaseSelection,
  backgroundImage,
}) => {
  const { selectedCase, setSelectedCase, selectedBand, setSelectedBand } =
    useSelection();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    // Set the initial selected item if none is selected
    if (isCaseSelection && selectedCase) {
      const selectedIndex = items.findIndex(
        (item) => item.id === selectedCase.id
      );
      setSelectedItemIndex(selectedIndex);
    } else if (!isCaseSelection && selectedBand) {
      const selectedIndex = items.findIndex(
        (item) => item.id === selectedBand.id
      );
      setSelectedItemIndex(selectedIndex);
    }
  }, [isCaseSelection, selectedCase, selectedBand, items]);

  const handleItemClick = (index) => {
    if (isCaseSelection) {
      setSelectedCase(items[index]);
    } else {
      setSelectedBand(items[index]);
    }
    setSelectedItemIndex(index);
  };

  const sliderSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 3,
    beforeChange: (current, next) => setSelectedItemIndex(next),
  };

  return (
    <div className="slider-container">
      {isSideImage ? (
        <>
          <div className={`background-image ${!isCaseSelection && "move-up"}`}>
            <img
              src={backgroundImage}
              alt="Background"
              className="background-img"
            />
          </div>

          <Slider {...sliderSettings} className="slider">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`slide ${
                  index === selectedItemIndex ? "active" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <img src={item.image} alt={item.alt} className="slider-img" />
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <div className="slider-container">
          <img
            src={selectedCase.sideImage}
            alt="side view"
            className="image-side"
          />
        </div>
      )}
    </div>
  );
};

export default CaseSlider;

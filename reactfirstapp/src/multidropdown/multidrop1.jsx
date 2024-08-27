import React, { useState } from "react";
import "./multidropdown.css";

const data = {
  fruit: {
    apple: ["greenApple", "redApple", "whiteApple"],
    orange: ["kamala", "bloodOrange", "jaffaOrange"],
    mango: ["alphonso", "irwin", "keitt"],
  },
  animals: {
    lion: ["maleLion", "femaleLion", "cub"],
    tiger: ["bengalTiger", "siberianTiger", "sumatranTiger"],
    elephant: ["africanElephant", "asianElephant"],
  },

  plants: {
    rose: ["redRose", "whiteRose", "yellowRose"],
    lily: ["whiteLily", "pinkLily", "orangeLily"],
    sunflower: ["giantSunflower", "commonSunflower", "dwarfSunflower"],
  },
};

function MultiDropDown() {
const [topicSelected, setTopicSelected] = useState("");
const [subTopicSelected, setSubTopicSelected] = useState("");
const [itemSelected, setItemSelected] = useState("");
const handleClick = (e) => {
  setTopicSelected(e.target.value);
  setSubTopicSelected("");
};
  const handleItemClick = (e) => {
    setSubTopicSelected(e.target.value);
  };
  const handleSubItemClick = (e) => {
    setItemSelected(e.target.value);
  };
  return (
    <div>
      <div>
      {itemSelected && <div>selected: <span>{itemSelected}</span> </div> }
        <br />
      </div>
      <div>
        <div className="topic">
          <select onChange={handleClick} value={topicSelected}>
            <option hidden>Select </option>
            {Object.keys(data).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        {topicSelected && (
          <div className="subtopic">
            <select onChange={handleItemClick} value={subTopicSelected}>
              <option hidden>Select item</option>
              {Object.keys(data[topicSelected]).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        )}
        {subTopicSelected && (
          <div className="item">
            <select value={itemSelected} onChange={handleSubItemClick}>
              <option hidden>Select subItem</option>
              {data[topicSelected][subTopicSelected].map((item) => (
                <option className="items" key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiDropDown;



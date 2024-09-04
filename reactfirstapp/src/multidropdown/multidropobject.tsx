
import React, { useState } from "react";
import "./multidropdown.css";

interface Item {
    label: string;
    children?: Item[];
  }
  
  
const data: Item[] = [
  {
    label: "fruit",
    children: [
      {
        label: "apple",
        children: [
          { label: "greenApple" },
          { label: "redApple" },
          { label: "whiteApple" },
        ],
      },
      {
        label: "orange",
        children: [
          { label: "kamala" },
          { label: "bloodOrange" },
          { label: "jaffaOrange" },
        ],
      },
      {
        label: "mango",
        children: [
          { label: "alphonso" },
          { label: "irwin" },
          { label: "keitt" },
        ],
      },
    ],
  },
  {
    label: "animals",
    children: [
      {
        label: "lion",
        children: [
          { label: "maleLion" },
          { label: "femaleLion" },
          { label: "cub" },
        ],
      },
      {
        label: "tiger",
        children: [
          { label: "bengalTiger" },
          { label: "siberianTiger" },
          { label: "sumatranTiger" },
        ],
      },
      {
        label: "elephant",
        children: [{ label: "africanElephant" }, { label: "asianElephant" }],
      },
    ],
  },
  {
    label: "plants",
    children: [
      {
        label: "rose",
        children: [
          { label: "redRose" },
          { label: "whiteRose" },
          { label: "yellowRose" },
        ],
      },
      {
        label: "lily",
        children: [
          { label: "whiteLily" },
          { label: "pinkLily" },
          { label: "orangeLily" },
        ],
      },
      {
        label: "sunflower",
        children: [
          { label: "giantSunflower" },
          { label: "commonSunflower" },
          { label: "dwarfSunflower" },
        ],
      },
    ],
  },
];

function MultiDropDown1(): React.JSX.Element {
    const [topicSelected, setTopicSelected] = useState<string>("");
    const [subTopicSelected, setSubTopicSelected] = useState<string>("");
    const [itemSelected, setItemSelected] = useState<string>("");
  
    const handleTopicChange = (topic: string) => {
      setTopicSelected(topic);
      setSubTopicSelected("");
      setItemSelected("");
    };
  
    const handleSubTopicChange = (subTopic) => {
      setSubTopicSelected(subTopic);
      setItemSelected("");
    };
  
    const handleItemChange = (item) => {
      setItemSelected(item);
    };
  
    const selectedTopicData = data.find((item) => item.label === topicSelected);
    const selectedSubTopicData = selectedTopicData?.children.find(
      (item) => item.label === subTopicSelected
    );
  
    return (
      <div>
        {itemSelected && (
          <div>
            Selected: <span>{itemSelected}</span>
          </div>
        )}
        <br />
        <div>
          <div className="topic">
            {data.map((item) => (
              <div
                key={item.label}
                onClick={() => handleTopicChange(item.label)}>
                {item.label}
              </div>
            ))}
          </div>
          {topicSelected && (
            <div className="subtopic">
              {selectedTopicData.children.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleSubTopicChange(item.label)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
          {subTopicSelected && (
            <div className="item">
              {selectedSubTopicData.children.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleItemChange(item.label)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default MultiDropDown1;
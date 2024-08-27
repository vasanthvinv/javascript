import React from "react";
import MultiDropDownRecrusion from './recurisionmultidrop'
const data = [
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
  
  

function RecrusionMultiDropDown() {
  return (
    <div className="App">
      <MultiDropDownRecrusion data={data} />
    </div>
  );
}

export default RecrusionMultiDropDown;
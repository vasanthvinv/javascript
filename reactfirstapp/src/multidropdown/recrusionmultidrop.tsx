import React, { useState } from "react";
import "./multidropdown.css";


function MultiDropDownRecrusion({data}): React.JSX.Element {
  const [openItems, setOpenItems] = useState<string | null> ('');
  const items = data.map((item) => item.label);  
  const [selectedItems,setSelectedItems] = useState<string[]>(items); 

  const handleOpen = (label: string) => {
      setOpenItems(openItems === label ? null : label);
      setSelectedItems(openItems === label ? items : label);
  };

return (
  <div className="dropdown">
    {data.map((item) => (
      <div key={item.label} className="item">
        {selectedItems.includes(item.label) && <span onClick={()=>handleOpen(item.label)}>{item.label}</span>}
        {openItems=== item.label && item.children  && (
          <div className="children">
            <MultiDropDownRecrusion data={item.children} />
          </div>
        )}
      </div>
    ))}
  </div>
);
}
export default MultiDropDownRecrusion;


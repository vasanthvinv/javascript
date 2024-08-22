
import React, { useState } from 'react';

const data = [
    { fruit: [{"apple":['greenApple','redApple','whiteApple']}, {"orange":['kamala','bloodOrange','jaffaOrange']},{"mango":['alphonso','irwin','keitt']}] },
   
];

function Multidrop() {
  const [isOpen, setIsOpen] = useState(null);

  const handleDrop = (i) => {
    setIsOpen(isOpen === i ? null : i);
  }

  return (
    <div>
      {data.map((item, i) => (
        <>
       <ul key={i} onClick={()=>handleDrop(i)}>{Object.keys(item)}</ul>
       <ul>
       {isOpen === i   && Object.values(item).map((ite,i)=>(<div key={i}>{ite.map((item,i)=>(<li>{item}</li>))}</div>))
        }      
        </ul> 
         </>
      ))}
    </div>
  );
}

export default Multidrop;




import React, { useState } from 'react';

const data = [
    {
      fruit: [
        { apple: ['greenApple', 'redApple', 'whiteApple'] },
        { orange: ['kamala', 'bloodOrange', 'jaffaOrange'] },
        { mango: ['alphonso', 'irwin', 'keitt'] },
      ],
    },
    {
      animals: [
        { lion: ['maleLion', 'femaleLion', 'cub'] },
        { tiger: ['bengalTiger', 'siberianTiger', 'sumatranTiger'] },
        { elephant: ['africanElephant', 'asianElephant'] },
      ],
    },
    {
      plants: [
        { rose: ['redRose', 'whiteRose', 'yellowRose'] },
        { lily: ['whiteLily', 'pinkLily', 'orangeLily'] },
        { sunflower: ['giantSunflower', 'commonSunflower', 'dwarfSunflower'] },
      ],
    },
  ];

function Multidrop() {
    
  const [isOpen, setIsOpen] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleDrop = (i) => {
    setIsOpen(isOpen === i ? null : i);
  };

  const handleClick = (i) => {
    setSelected(selected === i ? null : i);  };

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <ul onClick={() => handleDrop(i)}>
            {Object.keys(item)}
          </ul>
          {isOpen === i && (
            <ul>
              {Object.values(item)[0].map((object, index) => (
                <div key={index}>
                  {Object.keys(object).map((key,i) => (
                    <div key={i}>
                      <li onClick={() => handleClick(key)}>
                        {key}
                      </li>
                      { selected === key && (
                        <ul>
                          {object[key].map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Multidrop;

import React, { useState } from 'react';

interface Item {
    [key: string]: string[];
  }
  
  interface Data {
    [key: string]: Item[];
  }
const data: Data[] = [
  
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

function Multidrop(): React.JSX.Element {
    
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleDrop = (i: number) => {
    setIsOpen(isOpen === i ? null : i);
  };

  const handleClick = (i: string) => {
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

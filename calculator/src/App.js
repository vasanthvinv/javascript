import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';

function App() {
  const buttons = ['C','/','^', 'x','1', '2', '3', '+','4', '5', '6','-', '7', '8', '9','*','%','0','.','='];
  const [buttonText, setButtonText] = useState([]);
  const [input, setInput] = useState([]);
  
  let a=  buttonText.join();


  const handleClick = (value) => {
    setButtonText(_.without([...buttonText,value],'=','+'));
      // if(value === '=')  {
      // return sumofdigit(a)
      // }
      sumofdigit(a)
  }
  function sumofdigit(num){
    let sums = 0;
    for (let char of a){
     let sum = char;
     console.log(sum);
     console.log(sums);

     
     sums += sum;
     setInput(sums)
    }
    console.log(sums);

 }
  return (
    <div className="calculator">
      <table className='input'> <tr><td>{buttonText}{input}</td></tr></table>
      <div className="number-buttons">
        {buttons.map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const buttons = ['1', '2', '3','4', '5', '6', '7', '8', '9','0','.'];
//   const sym = ['C','/','^', 'x',];
//   const syms = ['+','-','*','='];

//   const [buttonText, setButtonText] = useState([]);

//   const handleClick = (value) => {
//     setButtonText([...buttonText,value])
//     console.log(buttonText);
    
//   }

//   return (
//     <div className="calculator">
//       <table className='input'><tr><td>{buttonText.map((item)=>(item))}</td></tr> </table>
//       <div className="number-buttons">
//         {sym.map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>
//             {item}
//           </button>
//         ))}
//       </div> <div className="syms-buttons">
//         {syms.map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>
//             {item}
//           </button>
//         ))}
//       </div>
//       <div className="number-buttons1">
//         {buttons.map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

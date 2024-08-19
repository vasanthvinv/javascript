import React, { useState } from 'react';
import './ticktacktoe.css';

function TickTacToe() {
    const [buttonText, setButtonText] = useState(['','','']);
    const [buttonTexts, setButtonTexts] = useState(['','','']);

    const handleClick = () => {
      setButtonText('o');
    };
    const handleClick1 = () => {
        setButtonTexts('x');
      };
  
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={handleClick}>{buttonText}</button>
              </td>
              <td>
                <button onClick={handleClick1}>{buttonTexts}</button>
              </td>
              <td>
                <button onClick={handleClick}>{}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



    );
  }
  
export default TickTacToe
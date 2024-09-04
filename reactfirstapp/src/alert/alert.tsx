import React, { useEffect, useState } from "react";


function Alert (): React.JSX.Element {
    const [clickCount, setClickCount] = useState<number>(0);

const handleEvent = ()=>{
    setClickCount(prevCount => prevCount + 1);
}

const handleEventDecrement = ()=>{
    setClickCount(prevCount => prevCount - 1);
}

useEffect(() => {
        alert(`Button clicked ${clickCount}`);
}, [clickCount]);

    return(
        <div>
            <button onClick={handleEventDecrement}>Decreasing</button>{clickCount}
            <button onClick={handleEvent}>Increasing</button>
        </div>
    )
}

export default Alert;
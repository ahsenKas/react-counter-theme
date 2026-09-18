import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <h1>Counter: {count}</h1>

      <div className="butonlar">
        <button onClick={arttir}>Arttır</button>

        <button onClick={azalt}>Azalt</button>

        <button onClick={() => setCount(0)}>Sıfırla</button>
      </div>
    </div>
  );
}

export default Counter;

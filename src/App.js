import './App.css';

function App() {
  const cells = 230;
  const numbers = [];

  for (let i = 1; i <= cells; i++) {
    numbers.push(i);
  }

  const isBlueCell = (cell) => {
    let num = 1; 
    let step = 11; 

    while (num <= cells) {
      if (num === cell) return true; 
      num += step; 

      if (num >= 100 && num < 181) step = 9; 

      else if (num >= 181) step = 11; 
    }

    return false;
  };

  return (
    <div className="grid-container">
      {numbers.map((cell) => (
        <div 
          key={cell} 
          className={`grid-cell ${isBlueCell(cell) ? 'blue-cell' : ''}`}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

export default App;

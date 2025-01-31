

import './App.css';

function App() {
  const cells = 230;
  const numbers = [];

  for (let i = 1; i <= cells; i++) {
    numbers.push(i);
  }

  // Function to determine if a cell should be blue
  const isBlueCell = (cell) => {
    let num = 1;  // Start from 1
    let step = 11; // Initial difference is 11

    while (num <= cells) {
      if (num === cell) return true; // If matches, return true
      num += step; // Increase by step

      // Adjust step based on cell number range
      if (num > 100 && num <= 181) step = 9;  // Mid-range uses step 9
      else if (num > 181) step = 11;  // Last range uses step 11
    }

    return false;
  };

  // Function to determine if a cell should be red
  const isRedCell = (cell) => {
    let num = 2;  // Start at 2 for red
    let step = 11; // Initial difference is 11

    while (num <= cells) {
      if (num === cell) return true; // If matches, return true
      num += step; // Increase by step

      // Adjust step based on cell number range
      if (num > 100 && num <= 181) step = 9;  // Mid-range uses step 9
      else if (num > 181) step = 11;  // Last range uses step 11
    }

    return false;
  };

  return (
    <div className="grid-container">
      {numbers.map((cell) => (
        <div 
          key={cell} 
          className={`grid-cell ${isBlueCell(cell) ? 'blue-cell' : ''} ${isRedCell(cell) ? 'red-cell' : ''}`}
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

export default App;



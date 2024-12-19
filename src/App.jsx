// Importing necessary styles and components
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import { useState } from "react"; // Importing the useState hook to manage state

// Main App component
function App() {
  // State variable CalVal to store the current value on the display
  let [CalVal, setCalVal] = useState(""); // Initial value is an empty string

  // Function to handle button clicks
  const onButtonClick = (buttonText) => {
    // If the 'C' button is clicked, clear the display
    if (buttonText === "C") {
      setCalVal(""); // Clears the current value on the display
    }
    // If the '=' button is clicked, evaluate the expression in CalVal
    else if (buttonText === "=") {
      try {
        // Use eval to evaluate the mathematical expression in CalVal
        const result = eval(CalVal);
        setCalVal(result); // Set the result of the expression as the new display value
      } catch (error) {
        setCalVal("Error"); // If the evaluation fails (invalid expression), show "Error"
      }
    }
    // If any other button is clicked, append the button text to the current value
    else {
      const newDisplayValue = CalVal + buttonText; // Concatenate the current value with the new button text
      setCalVal(newDisplayValue); // Update the state with the new value
    }
  };

  // Render the JSX structure of the App component
  return (
    <div className={styles.calculator}>
      {" "}
      {/* Wrapper div for the calculator */}
      {/* Display component that shows the current value */}
      <Display displayValue={CalVal} />
      {/* ButtonsContainer component that renders the calculator buttons */}
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

// Export the App component to be used elsewhere in the app
export default App;

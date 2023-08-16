import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Step2 from './Step2';
import SummaryStep from './SummaryStep';

const Sample = () => {
  const [step, setStep] = useState(1);

  const transitions = useTransition(step, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  const handleNext = () => {
    // Perform validation for the current step
    
      setStep(step + 1);
   
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="form-container">
      {transitions((styles, currentStep) => (
        <animated.div style={styles}>
          {currentStep === 1 && <h1>Step 1</h1>}
          {currentStep === 2 && <h1>Step 2</h1>}
          {currentStep === 3 && <h1>Step 3</h1>}
          {currentStep === 4 && <h1>Step 4</h1>}
          {currentStep === 5 && <h1>Step 5</h1>}
          {/* Add more steps as needed */}
        </animated.div>
      ))}
      <div className="button-container">
        <button onClick={handlePrev}>Previous</button>
        {step < 8 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Sample;
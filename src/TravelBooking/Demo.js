import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Redirect to another page based on the selected option
    if (selectedValue === 'option1') {
      history.push('/page1');
    } else if (selectedValue === 'option2') {
      history.push('/page2');
    } // Add more conditions for other options if needed
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default SelectPage;

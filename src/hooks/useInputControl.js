import { useState } from 'react';

export const useInputControl = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e, type) => {
    let val = e.target.value;

    switch (type) {
      case 'textOnly': 
        // Regex: Solo permite letras y espacios. Bloquea números.
        if (/^[a-zA-Z\sñÑ]*$/.test(val)) setValue(val);
        break;
      case 'numberOnly':
        // Regex: Solo permite números. Bloquea letras.
        if (/^\d*$/.test(val)) setValue(val);
        break;
      default:
        setValue(val);
    }
  };

  return { value, onChange: handleChange, setValue };
};
import React from 'react';
import PTypes from 'prop-types';

function FileInput({ onChange, ...props }) {
  const inputRef = React.createRef(null);
  const [location, setLocation] = React.useState(null);

  const loadFileLocation = photo => {
    if (!photo) {
      setLocation(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setLocation(reader.result);
    };
    reader.readAsDataURL(photo);
  };
  
  const handleChange = (event) => {
    const file = event.target.files[0];
    loadFileLocation(file);
    onChange(event);
  };
  
  return (
    <div className="File-input">

      <input
      ref={inputRef}
      type="file"
      onChange={handleChange}
      {...props}
      />

      <img
      src={location}
      width="150"
      height="150"
      alt="item"
      />

    </div>    
  );
}

FileInput.PTypes = {
  handleChange: PTypes.func.isRequired,
  className: PTypes.string,
  file: PTypes.object
}
  
export default FileInput;
  
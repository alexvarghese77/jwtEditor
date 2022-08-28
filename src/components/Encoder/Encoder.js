import React from 'react';
import ContentEditable from 'react-contenteditable';

const Encoder = ({ changeHandler, encodedData, encoderRef }) => {
  const getEncodedToken = () => {
    const [header, payload, signature] = encodedData.split('.');
    return `<div>
        <b style="color:#fb015b;">${header}.</b><b style="color:#d63aff;">${payload}.</b><b style="color:#00b9f1;">${signature}</b>
      </div>`;
  };

  return (
    <div className="encoder">
      <div>
        <p>
          <span className="sub-heading">Encoder</span>
          <span className="sub-heading-metadata">PASTE A TOKEN HERE</span>
        </p>
      </div>
      <div className="main-container">
        <ContentEditable
          innerRef={encoderRef}
          html={getEncodedToken()} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={changeHandler} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
          className="contenteditable"
        />
      </div>
    </div>
  );
};

export default Encoder;

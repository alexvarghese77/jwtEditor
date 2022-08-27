import React, { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

const Encoder = ({ changeHandler }) => {
  const encoderRef = useRef();
  const getEncodedToken = () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const [header, payload, signature] = token.split('.');
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

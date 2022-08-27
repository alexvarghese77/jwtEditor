import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import base64 from "base-64";
import utf8 from "utf8";

const Payload = ({
  payload,
  setEncodedData,
  header,
  signature,
  setIsgenerated,
}) => {
  const headerRef = useRef();

  const onChangeHandler = (event) => {
    setIsgenerated(false);
    console.log(
      "🚀 ~ file: Header.jsx ~ line 12 ~ onChangeHandler ~ event",
      event
    );
    let encodedPayload = base64.encode(
      event.target.value.replace(/<[^>]*>/g, "")
    );

    setEncodedData([header, encodedPayload, signature].join("."));
    return {};
  };

  const getPayloadData = () => {
    try {
      const payloadDecoded = payload ? utf8.decode(base64.decode(payload)) : "";
      return `<b style="color:#d63aff;">${payloadDecoded}</b>`;
    } catch (error) {
      return `<b style="color:#fb015b;">invalid</b>`;
    }
  };

  return (
    <div className="decoder-items">
      <div className="decoder-header-wrapper">
        <p className="decoder-header">
          PAYLOAD:<span className="decoder-subheading"> DATA</span>
        </p>
      </div>
      <div>
        <ContentEditable
          innerRef={headerRef}
          html={getPayloadData()} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={onChangeHandler} // handle innerHTML change
          tagName="article" // Use a custom HTML tag (uses a div by default)
          className="decoder-content-style"
        />
      </div>
    </div>
  );
};

export default Payload;

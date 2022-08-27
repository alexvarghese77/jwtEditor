import React from "react";
import Header from "./Components/Header";
import Payload from "./Components/Payload";
import Signature from "./Components/Signature";
const Decoder = ({ encodedData, setEncodedData, setIsgenerated }) => {
  const [header, payload, signature] = encodedData.split(".");
  return (
    <div className="decoder">
      <div>
        <p>
          <span className="sub-heading">Decoded</span>
          <span className="sub-heading-metadata">
            edit the payload and secret
          </span>
        </p>
      </div>
      <div className="main-container main-container-decorder">
        <Header header={header} />
        <Payload
          payload={payload}
          setEncodedData={setEncodedData}
          header={header}
          signature={signature}
          setIsgenerated={setIsgenerated}
        />
        <Signature signature={signature} />
      </div>
    </div>
  );
};

export default Decoder;

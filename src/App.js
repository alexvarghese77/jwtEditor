import "./App.css";
import Header from "./components/Header/Header";
import Decoder from "./components/Decoder/Decoder";
import Encoder from "./components/Encoder/Encoder.js";
import "./App.css";
import base64 from "base-64";
import utf8 from "utf8";
import { useState } from "react";
import { CSVLink } from "react-csv";

function App() {
  const input = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const [encodedData, setEndcodedData] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  var bytes = base64.decode(input);
  var text = utf8.decode(bytes);
  const changeHandler = (evt) => {
    console.log(
      "🚀 ~ file: Encoder.js ~ line 16 ~ changeHandler ~ evt",
      evt.target.value.replace(/<[^>]*>/g, "")
    );
    setEndcodedData(evt.target.value.replace(/<[^>]*>/g, ""));
  };

  const [csvData, setCsvData] = useState();
  const [isGenerated, setIsgenerated] = useState(false);

  const generateTests = () => {
    const allNoneCombo = [
      "NONE",
      "NONe",
      "NOnE",
      "NOne",
      "NoNE",
      "NoNe",
      "NonE",
      "None",
      "nONE",
      "nONe",
      "nOnE",
      "nOne",
      "noNE",
      "noNe",
      "nonE",
      "none",
    ];
    const dataToSet = [];
    allNoneCombo.forEach((element) => {
      const [header, payload, signature] = encodedData.split(".");
      let decodedHeader = JSON.parse(utf8.decode(base64.decode(header)));
      decodedHeader.alg = element;

      const encodedHeader = base64.encode(JSON.stringify(decodedHeader));
      dataToSet.push([[encodedHeader, payload, signature].join(".")]);
    });
    setCsvData(dataToSet);
    setIsgenerated(true);
  };

  return (
    <div className="">
      <Header></Header>
      <section className="content-main">
        <Encoder changeHandler={changeHandler} />
        <Decoder />
        <button onClick={generateTests}>Generate Test</button>
        {isGenerated && (
          <CSVLink data={csvData} filename="JWT_Test_Sample">
            Download
          </CSVLink>
        )}
      </section>
    </div>
  );
}

export default App;

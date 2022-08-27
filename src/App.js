import { useState } from "react";
import { CSVLink } from "react-csv";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [csvData, setCsvData] = useState([]);
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
    dataToSet.push([
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    ]);
    setCsvData([dataToSet]);
    setIsgenerated(true);
  };

  return (
    <div className="">
      <Header></Header>
      <div className="bodyContainer">
        <div className="boxContainer">
          <div>
            Encoder
            <textarea className="textAreaEncode"></textarea>
          </div>
          <div>
            <div>
              Decoded
              <input></input>
            </div>
            <div>
              Payload
              <input></input>
            </div>
            <div>
              Signature
              <input></input>
            </div>
          </div>
        </div>
        <button onClick={generateTests}>Generate Test</button>
        {isGenerated && (
          <CSVLink data={csvData} filename="JWT_Test_Sample">
            Download
          </CSVLink>
        )}
      </div>
    </div>
  );
}

export default App;

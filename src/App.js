import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Decoder from './components/Decoder/Decoder';
import Encoder from './components/Encoder/Encoder.js';
import './App.css';
import base64 from 'base-64';
import utf8 from 'utf8';
import { CSVLink } from 'react-csv';

function App() {
  const [encodedData, setEncodedData] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  const [decodedData, setDecodedData] = useState();
  const encoderRef = useRef();

  const changeHandler = (evt) => {
    const encodedValue = encoderRef.current.innerText;
    //setDecodedData(encodedValue);

    setEncodedData(evt.target.value.replace(/<[^>]*>/g, ''));
  };

  const [csvData, setCsvData] = useState();
  const [isGenerated, setIsgenerated] = useState(false);

  const generateTests = () => {
    const allNoneCombo = [
      'NONE',
      'NONe',
      'NOnE',
      'NOne',
      'NoNE',
      'NoNe',
      'NonE',
      'None',
      'nONE',
      'nONe',
      'nOnE',
      'nOne',
      'noNE',
      'noNe',
      'nonE',
      'none'
    ];
    const dataToSet = [];
    allNoneCombo.forEach((element) => {
      const [header, payload, signature] = encodedData.split('.');
      let decodedHeader = JSON.parse(utf8.decode(base64.decode(header)));
      decodedHeader.alg = element;

      let encodedHeader = base64.encode(JSON.stringify(decodedHeader));
      //at end of header '=' should not come
      if (encodedHeader.charAt(encodedHeader.length - 1) === "=") {
        encodedHeader = encodedHeader.slice(0, encodedHeader.length - 1);
      }
      dataToSet.push([[encodedHeader, payload, signature].join(".")]);
    });
    setCsvData(dataToSet);
    setIsgenerated(true);
  };

  return (
    <div className="">
      <Header></Header>
      <section className="content-main">
        <Encoder
          changeHandler={changeHandler}
          encodedData={encodedData}
          encoderRef={encoderRef}
        />
        <Decoder encodedData={encodedData} />
      </section>
      <div className="buttonContainer">
        <button className="genrateTestBtn" onClick={generateTests}>
          Generate Test
        </button>
        {isGenerated && (
          <CSVLink data={csvData} filename="JWT_Test_Sample">
            <button className="downloadBtn">Download</button>
          </CSVLink>
        )}
      </div>
    </div>
  );
}

export default App;

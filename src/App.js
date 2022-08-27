import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="bodyContainer">
        <div className='boxContainer'>
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

        <button>Generate Test</button>
      </div>
    </div>
  );
}

export default App;
